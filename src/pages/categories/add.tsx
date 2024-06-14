import { useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import { useAuthContext } from "src/hooks/useAuthContext"
import useMutations from "src/hooks/useMutation"
import { IAddCategory } from "src/interfaces"
import Layout from 'src/layout'
import { apiAddCategory } from "src/services/CommonService"

const initialState: IAddCategory = { 
    section: "",
}

type Action = "reset" | "section"
interface IAction {
    type: Action
    payload: string
}

const AddCategory = () => {
    const { user } = useAuthContext()
    const naviagate = useNavigate()

    const [data, setData] = useReducer((state: IAddCategory, action: IAction) => {
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

    const addItemMutation = useMutations<IAddCategory, any>(
        apiAddCategory,
        {
        onSuccess: (data: any) => {
            console.log("data", data)
            toast.success("Category Added Successfully.")
            naviagate("/categories/all")
        },
        showErrorMessage: true,
        requireAuth: true,
    })


    return (
        <Layout>
          {(addItemMutation?.isLoading) && <Loader />}

          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1 className="text-lg">Add Category</h1>

            <div className="flex flex-col gap-4 mt-12">
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Category Title</span>
                    <input value={data.section} onChange={e => handleChange("section", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <Button onClick={() => addItemMutation.mutate(data)} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
            </div>
          </div>
        </Layout>
    )
}

export default AddCategory
