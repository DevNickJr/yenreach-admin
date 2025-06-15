import { useReducer, useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import { useAuthContext } from "src/hooks/useAuthContext"
import useMutations from "src/hooks/useMutation"
import { AdminAuthorizationLevel, IAddAdmin } from "src/interfaces"
import Layout from 'src/layout'
import { apiAddAdmin } from "src/services/CommonService"
import useCopyToClipBoard from "src/hooks/useCopy"

const initialState: IAddAdmin = { 
    password: '',
    phoneNumber: '',
    name: '',
    username: '',
    personal_email: '',
    official_email: '',
    authorizationLevel: AdminAuthorizationLevel.STAFF,
}

type Action = "reset" | "name" | "username" | "personal_email" | "official_email" | "phoneNumber" | "password"
interface IAction {
    type: Action
    payload: string
}

const details = 'Hi @Firstname, \n\n' +
    'You have been added as an admin to the system.\n\n' +
    'Your credentials are:\n\n' +
    'Username: @Username\n' +
    'Password: @Password\n\n' +
    'Please change your password after logging in.\n\n' +
    'Thank you,\n' +
    'The Admin Team\n'
    

const AddAdmin = () => {
    const [step, setStep] = useState(1)
    const { user } = useAuthContext()
    const [showPassword, setShowPassword] = useState(false)
    const { copy } = useCopyToClipBoard()
    const [admin, setAdmin] = useState<IAddAdmin>(initialState)

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

    const addItemMutation = useMutations<IAddAdmin, IAddAdmin>(
        apiAddAdmin,
        {
        onSuccess: (data) => {
            setAdmin(data)
            console.log("data", data)
            toast.success("Admin Added Successfully.")
            setData({ type: "reset", payload: "" })
            setStep(2)
        },
        showErrorMessage: true,
        requireAuth: true,
    })


    // const activateAdminMutation = useMutations<IActivateAdmin, unknown>(
    //     apiActivateAdmin,
    //     {
    //     onSuccess: () => {
    //         toast.success("Admin Activated Successfully.")
    //     },
    //     showErrorMessage: true,
    //     requireAuth: true,
    // })

    return (
        <Layout>
          {(addItemMutation?.isLoading) && <Loader />}

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
                    <div className="flex flex-col gap-1 relative">
                        <span className="text-xs">Password</span>
                        <input value={data.password} onChange={e => handleChange("password", e.target.value)} type={showPassword ? 'text' : 'password'} className="p-2 px-3 text-sm rounded-md outline-none" />
                        {
                            showPassword ? <MdVisibilityOff onClick={() => setShowPassword(false)} className="text-lg text-gray-400 cursor-pointer absolute right-3 bottom-2" /> : <MdVisibility onClick={() => setShowPassword(true)} className="text-lg text-gray-400 cursor-pointer absolute right-3 bottom-2" />
                        }
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs">Phone Number</span>
                        <input value={data.phoneNumber} onChange={e => handleChange("phoneNumber", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                    </div>
                    <Button onClick={() => addItemMutation.mutate(data)} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
                </>}
               {step > 1 && <>

                    {/* Youve added a new admin section - success */}
                    <div className="flex flex-col gap-1 justify-center">
                        <span className="text-lg font-bold">You&apos;ve added a new admin section - success</span>
                        <span className="text-sm">We have sent an email to the admin with the credentials</span>
                        <span className="text-sm">Username: {admin.username}</span>
                        <span className="text-sm">Password: {admin.password}</span>
                        <span>Copy the credentials and send it to the admin</span>
                    </div>
                    {
                        step === 2 ?
                    <Button onClick={() => {
                        copy(details.replace("@Firstname", admin.name || "").replace("@Username", admin.username || "").replace("@Password", admin.password || ""))
                        toast.success("Copied to clipboard")
                        setStep(3)
                    }} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Copy Details</Button>
                    :
                    <Button onClick={() => setStep(1)} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Done</Button>
                    }
                </>}
            </div>
          </div>
        </Layout>
    )
}

export default AddAdmin
