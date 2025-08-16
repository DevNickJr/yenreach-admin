import { useReducer, useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import { useAuthContext } from "src/hooks/useAuthContext"
import useMutations from "src/hooks/useMutation"
import { IAddSetting, SettingsValueType } from "src/interfaces"
import Layout from 'src/layout'
import { apiAddSetting } from "src/services/CommonService"
import useCopyToClipBoard from "src/hooks/useCopy"

const initialState: IAddSetting = { 
    name: '',
    value: '',
    valueType: '',
    options: [],
}

type Action = "reset" | "name" | "value" | "valueType" | "options"
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
    const [admin, setAdmin] = useState<IAddSetting>(initialState)

    const [data, setData] = useReducer((state: IAddSetting, action: IAction) => {
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

    const addItemMutation = useMutations<IAddSetting, IAddSetting>(
        apiAddSetting,
        {
        onSuccess: (data) => {
            setAdmin(data)
            console.log("data", data)
            toast.success("Setting Updated Successfully.")
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
            <h1 className="text-lg">Update Settings</h1>

            <div className="flex flex-col gap-4 mt-12">
                <div className="flex flex-col gap-1">
                    <span className="text-md">Black Friday enabled</span>
                    <input type="checkbox" className="p-2 px-3 text-sm rounded-md w-fit border border-black" name="is_black_friday_enabled" onChange={(checked) => {
                        console.log("checked", checked)
                        addItemMutation.mutate({
                            name: 'Black Friday enabled',
                            value: checked.target.checked ? true : false,
                            valueType: 'boolean',
                            options: ['true', 'false'],
                        })
                    }} />
                </div>
                {/* <div className="flex flex-col gap-1">
                    <span className="text-xs">Value</span>
                    <input value={data.value} onChange={e => handleChange("value", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div> */}
                {/* <div className="flex flex-col gap-1">
                    <span className="text-xs">Value Type</span>
                    <select value={data.valueType} onChange={e => handleChange("valueType", e.target.value)} className="p-2 px-3 text-sm rounded-md outline-none">
                        <option value="">Select Value Type</option>
                        {
                            Object.values(SettingsValueType)?.map((val, i) => (
                                <option key={i} value={val}>{val}</option>
                            ))
                        }
                    </select>
                </div> */}
                <Button onClick={() => addItemMutation.mutate(data)} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
            </div>
          </div>
        </Layout>
    )
}

export default AddAdmin
