import { useReducer } from "react"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import { useAuthContext } from "src/hooks/useAuthContext"
import useMutations from "src/hooks/useMutation"
import { IBulkSMS } from "src/interfaces"
import Layout from 'src/layout'
import { apiSendBulkSMS } from "src/services/CommonService"

const initialState: IBulkSMS = { 
    content: ""
}

type Action = "reset" | "content"

interface IAction {
    type: Action,
    payload: string
}

const BulkSMS = () => {
    const { user } = useAuthContext()
    const [data, setData] = useReducer((state: IBulkSMS, action: IAction) => {
    if (action.type === "reset") {
        return initialState
    }
    return {
        ...state,
        [action.type]: action.payload
    }
    }, initialState)

    const addItemMutation = useMutations<IBulkSMS, any>(
        apiSendBulkSMS,
        {
        onSuccess: (data: any) => {
            console.log("data", data)
            toast.success("SMS sent Successfully.")
            setData({ type: "reset", payload: "" })
        },
        showErrorMessage: true,
        requireAuth: true,
    })

    const handleChange = (type: Action, payload: string) => {
        setData({ type, payload })
    }

    return (
        <Layout>
          {addItemMutation?.isLoading && <Loader />}

          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Send Bulk Message</h1>
            <div className="flex flex-col gap-4 mt-12">
                <div className="flex flex-col gap-2">
                    <span className="text-sm">Message</span>
                    <textarea value={data.content} onChange={e => handleChange("content", e.target.value)} rows={5} cols={10} className="p-2 px-3 text-sm rounded-md outline-none max-w-sm" placeholder="Enter Text Message" />
                </div>
                <Button onClick={() => addItemMutation.mutate({ ...data })} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
            </div>
          </div>
        </Layout>
    )
}

export default BulkSMS
