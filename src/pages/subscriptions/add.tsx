import { useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import { useAuthContext } from "src/hooks/useAuthContext"
import useMutations from "src/hooks/useMutation"
import { IAddSubscription } from "src/interfaces"
import Layout from 'src/layout'
import { apiAddSubscription } from "src/services/CommonService"

const initialState: IAddSubscription = { 
    name: '',
    description: '',
    photoLimit: 0,
    videoLimit: 0,
    sliderLimit: 0,
    branchLimit: 0,
    socialMediaLimit: 0,
    order: 0,
}
type Action = "reset" | "name" | "description" | "order" | "photoLimit" | "videoLimit" | "sliderLimit" | "socialMediaLimit" | "branchLimit"

interface IAction {
    type: Action
    payload: string
}

const AddSubscription = () => {
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const [data, setData] = useReducer((state: IAddSubscription, action: IAction) => {
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

    const addItemMutation = useMutations<IAddSubscription, unknown>(
        apiAddSubscription,
        {
        onSuccess: (data: unknown) => {
            console.log("data", data)
            toast.success("Subcription Package Added Successfully.")
            handleChange("reset", '')
            navigate("/subscriptions/all")
        },
        showErrorMessage: true,
        requireAuth: true,
    })


    return (
        <Layout>
          {(addItemMutation?.isLoading) && <Loader />}

          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1 className="text-lg">Add Subscription Package</h1>

            <div className="flex flex-col gap-4 mt-12">
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Package Name</span>
                    <input value={data.name} onChange={e => handleChange("name", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Description</span>
                    <input value={data.description} onChange={e => handleChange("description", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">order</span>
                    <input value={data.order==0 ? '' : data.order} onChange={e => handleChange("order", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Photos</span>
                    <input value={data.photoLimit==0 ? '' : data.photoLimit} onChange={e => handleChange("photoLimit", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Videos</span>
                    <input value={data.videoLimit==0 ? '' : data.videoLimit} onChange={e => handleChange("videoLimit", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Slider</span>
                    <input value={data.sliderLimit==0 ? '' : data.sliderLimit} onChange={e => handleChange("sliderLimit", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Socialmedia</span>
                    <input value={data.socialMediaLimit==0 ? '' : data.socialMediaLimit} onChange={e => handleChange("socialMediaLimit", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Branches</span>
                    <input value={data.branchLimit==0 ? '' : data.branchLimit} onChange={e => handleChange("branchLimit", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <Button onClick={() => addItemMutation.mutate(data)} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
            </div>
          </div>
        </Layout>
    )
}

export default AddSubscription
