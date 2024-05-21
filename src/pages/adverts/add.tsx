import { useReducer } from "react"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import { useAuthContext } from "src/hooks/useAuthContext"
import useMutations from "src/hooks/useMutation"
import { IAddAdvert } from "src/interfaces"
import Layout from 'src/layout'
import { apiAddAdvert } from "src/services/CommonService"

const initialState: IAddAdvert = { 
    title: "",
    duration: "",
    duration_type: "",
    amount: "",
}

type Action = "reset" | "title" | "amount" | "duration_type" | "duration"
interface IAction {
    type: Action
    payload: string
}

const AddAdvert = () => {
    const { user } = useAuthContext()

    const [data, setData] = useReducer((state: IAddAdvert, action: IAction) => {
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

    const addItemMutation = useMutations<IAddAdvert, any>(
        apiAddAdvert,
        {
        onSuccess: (data: any) => {
            console.log("data", data)
            toast.success("Advert Added Successfully.")
        },
        showErrorMessage: true,
        requireAuth: true,
    })


    return (
        <Layout>
          {(addItemMutation?.isLoading) && <Loader />}

          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1 className="text-lg">Add Advert Payment Type</h1>

            <div className="flex flex-col gap-4 mt-12">
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Title</span>
                    <input value={data.title} onChange={e => handleChange("title", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Duration</span>
                    <input value={data.duration} onChange={e => handleChange("duration", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Duration Type</span>
                    <input value={data.duration_type} onChange={e => handleChange("duration_type", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Amount</span>
                    <input value={data.amount} onChange={e => handleChange("amount", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <Button onClick={() => addItemMutation.mutate(data)} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
            </div>
          </div>
        </Layout>
    )
}

export default AddAdvert
