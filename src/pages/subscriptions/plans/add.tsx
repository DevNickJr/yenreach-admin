import { useReducer } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import useMutations from "src/hooks/useMutation"
import { IPlan, ISubscription } from "src/interfaces"
import Layout from 'src/layout'
import { apiAddPlan, apiAdminGetSubscriptionByString } from "src/services/CommonService"

const initialState: IPlan = { 
    subscription_string: '',
    plan: '',
    duration_type: 0,
    duration: 0,
    price: 0,
    description: '',
}

type Action = "reset" | "subscription_string" | "plan" | "duration" | "duration_type" | "price" | "description"
interface IAction {
    type: Action
    payload: string
}

const AddPlan = () => {
    const { id } = useParams()
    const { user } = useAuthContext()
    const naviagate = useNavigate()


    
    const { data: subscription } = useFetch<ISubscription>({
        api: apiAdminGetSubscriptionByString,
        key: ["subscriptions", String(id)],
        param: id
      })

    const [data, setData] = useReducer((state: IPlan, action: IAction) => {
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

    const addItemMutation = useMutations<IPlan, any>(
        apiAddPlan,
        {
        onSuccess: (data: any) => {
            console.log("data", data)
            toast.success("Sub Category Added Successfully.")
            naviagate(`/subscriptions/${id}/plans`)
        },
        showErrorMessage: true,
        requireAuth: true,
    })


    return (
        <Layout>
          {(addItemMutation?.isLoading) && <Loader />}

          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1 className="text-lg">Add Plan - {subscription?.package} Package</h1>

            <div className="flex flex-col gap-4 mt-12">
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Plan Name</span>
                    <input value={data.plan} onChange={e => handleChange("plan", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Price</span>
                    <input value={data.price === 0 ? "" : data.price} onChange={e => handleChange("price", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Duration</span>
                    <input value={data.duration === 0 ? "" : data.duration} onChange={e => handleChange("duration", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Duration Type</span>
                    <input value={data.duration_type === 0 ? "" : data.duration_type} onChange={e => handleChange("duration_type", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Description</span>
                    <input value={data.description} onChange={e => handleChange("description", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <Button onClick={() => addItemMutation.mutate({ ...data, subscription_string: id! })} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
            </div>
          </div>
        </Layout>
    )
}

export default AddPlan
