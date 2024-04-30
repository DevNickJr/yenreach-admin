import { useReducer, useState } from "react"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import { useAuthContext } from "src/hooks/useAuthContext"
import useMutations from "src/hooks/useMutation"
import { IActivateAdmin, IAddAdmin, IAdmin } from "src/interfaces"
import Layout from 'src/layout'
import { apiActivateAdmin, apiAddAdmin } from "src/services/CommonService"

const initialState: IAddAdmin = { 
    name: "",
    username: "",
    personal_email: "",
    official_email: "",
    phone: "",
    autho_level: 2,
}

type Action = "reset" | "name" | "username" | "personal_email" | "official_email" | "phone"
interface IAction {
    type: Action
    payload: string
}

const AddAdmin = () => {
    const [step, setStep] = useState(1)
    const [password, setPassword] = useState("")
    const [admin, setAdmin] = useState<IAdmin>()
    const { user } = useAuthContext()

    const [data, setData] = useReducer((state: IAddAdmin, action: IAction) => {
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

    const addItemMutation = useMutations<IAddAdmin, any>(
        apiAddAdmin,
        {
        onSuccess: (data: any) => {
            setAdmin(data)
            console.log("data", data)
            toast.success("Admin Added Successfully.")
            setData({ type: "reset", payload: "" })
            setStep(2)
        },
        showErrorMessage: true,
        requireAuth: true,
    })


    const activateAdminMutation = useMutations<IActivateAdmin, any>(
        apiActivateAdmin,
        {
        onSuccess: () => {
            toast.success("Admin Activated Successfully.")
            setPassword("")
        },
        showErrorMessage: true,
        requireAuth: true,
    })

    console.log({admin})

    return (
        <Layout>
          {(addItemMutation?.isLoading || activateAdminMutation?.isLoading) && <Loader />}

          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1 className="text-lg">Add Admin</h1>

            <div className="flex flex-col gap-4 mt-12">
               {step === 1 && <>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs">Name</span>
                        <input value={data.name} onChange={e => handleChange("name", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs">Username</span>
                        <input value={data.username} onChange={e => handleChange("username", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs">Personal Email</span>
                        <input value={data.personal_email} onChange={e => handleChange("personal_email", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs">Official Email</span>
                        <input value={data.official_email} onChange={e => handleChange("official_email", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs">Phone</span>
                        <input value={data.phone} onChange={e => handleChange("phone", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                    </div>
                    <Button onClick={() => addItemMutation.mutate(data)} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
                </>}
               {step === 2 && <>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs">Set Password</span>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                    </div>
                    {/* <div className="flex flex-col gap-1">
                        <span className="text-xs">Confirm Password</span>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                    </div> */}
                    <Button onClick={() => activateAdminMutation.mutate({
                        verify_string: admin?.verify_string || "",
                        password: password
                    })} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
                </>}
            </div>
          </div>
        </Layout>
    )
}

export default AddAdmin
