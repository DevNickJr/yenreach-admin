import { useReducer } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import useMutations from "src/hooks/useMutation"
import { IAddSubCategory, ICategory } from "src/interfaces"
import Layout from 'src/layout'
import { apiAddSubCategory, apiAdminGetCategoryString } from "src/services/CommonService"

const initialState: IAddSubCategory = { 
    section_string: "",
    category: "",
}

type Action = "reset" | "section_string" | "category"
interface IAction {
    type: Action
    payload: string
}

const AddSubCategory = () => {
    const { id } = useParams()
    const { user } = useAuthContext()
    const naviagate = useNavigate()

    const [data, setData] = useReducer((state: IAddSubCategory, action: IAction) => {
        if (action.type === "reset") {
            return initialState
        }
        return {
            ...state,
            [action.type]: action.payload
        }
    }, initialState)

    const handleChange = (type: Action, payload: string) => {
        setData({ type, payload })
    }

    const addItemMutation = useMutations<IAddSubCategory, any>(
        apiAddSubCategory,
        {
        onSuccess: (data: any) => {
            console.log("data", data)
            toast.success("Sub Category Added Successfully.")
            naviagate(`/categories/${id}/subcategories`)
        },
        showErrorMessage: true,
        requireAuth: true,
    })

    const { data: category } = useFetch<ICategory>({
        api: apiAdminGetCategoryString,
        key: ["category", String(id)],
        param: id
      })
  

    return (
        <Layout>
          {(addItemMutation?.isLoading) && <Loader />}

          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1 className="text-lg">Add Category - {category?.section}</h1>

            <div className="flex flex-col gap-4 mt-12">
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Sub Category Title</span>
                    <input value={data.category} onChange={e => handleChange("category", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <Button onClick={() => addItemMutation.mutate({ ...data, section_string: id! })} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
            </div>
          </div>
        </Layout>
    )
}

export default AddSubCategory
