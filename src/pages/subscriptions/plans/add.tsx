import { useReducer } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import useMutations from "src/hooks/useMutation"
import { ISubPlan, IPlan } from "src/interfaces"
import Layout from 'src/layout'
import { apiAddSubPlan, apiAdminGetSubscriptionByString } from "src/services/CommonService"

const initialState: ISubPlan = { 
    planId: '',
    name: '',
    durationInMonths: 0,
    amount: 0,
}

type Action = "reset" | "planId" | "name" | "durationInMonths" | "durationInMonths_type" | "amount" | "description"
interface IAction {
    type: Action
    payload: string
}

const AddPlan = () => {
    const { id } = useParams()
    const { user } = useAuthContext()
    const naviagate = useNavigate()


    
    const { data: subscription } = useFetch<IPlan>({
        api: apiAdminGetSubscriptionByString,
        key: ["subscriptions", String(id)],
        param: id
      })

    const [data, setData] = useReducer((state: ISubPlan, action: IAction) => {
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

    const addItemMutation = useMutations<ISubPlan, unknown>(
        apiAddSubPlan,
        {
        onSuccess: (data: unknown) => {
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
            <h1 className="text-lg">Add Plan - {subscription?.name} Package</h1>
            <div className="flex flex-col gap-4 mt-12">
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Plan Name</span>
                    <input value={data.name} onChange={e => handleChange("name", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Price</span>
                    <input value={data.amount === 0 ? "" : data.amount} onChange={e => handleChange("amount", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Duration in Months</span>
                    <input value={data.durationInMonths === 0 ? "" : data.durationInMonths} onChange={e => handleChange("durationInMonths", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                {/* <div className="flex flex-col gap-1">
                    <span className="text-xs">Description</span>
                    <input value={data.description} onChange={e => handleChange("description", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div> */}
                <Button onClick={() => addItemMutation.mutate({ ...data, planId: id! })} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
            </div>
          </div>
        </Layout>
    )
}

export default AddPlan
