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
    package: '',
    description: '',
    position: 0,
    photos: 0,
    videos: 0,
    slider: 0,
    socialmedia:0,
    branches: 0,
}
type Action = "reset" | "package" | "description" | "position" | "photos" | "videos" | "slider" | "socialmedia" | "branches"

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

    const addItemMutation = useMutations<IAddSubscription, any>(
        apiAddSubscription,
        {
        onSuccess: (data: any) => {
            console.log("data", data)
            toast.success("Package Added Successfully.")
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
                    <input value={data.package} onChange={e => handleChange("package", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Description</span>
                    <input value={data.description} onChange={e => handleChange("description", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Position</span>
                    <input value={data.position==0 ? '' : data.position} onChange={e => handleChange("position", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Photos</span>
                    <input value={data.photos==0 ? '' : data.photos} onChange={e => handleChange("photos", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Videos</span>
                    <input value={data.videos==0 ? '' : data.videos} onChange={e => handleChange("videos", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Slider</span>
                    <input value={data.slider==0 ? '' : data.slider} onChange={e => handleChange("slider", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Socialmedia</span>
                    <input value={data.socialmedia==0 ? '' : data.socialmedia} onChange={e => handleChange("socialmedia", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Branches</span>
                    <input value={data.branches==0 ? '' : data.branches} onChange={e => handleChange("branches", e.target.value)} type="number" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <Button onClick={() => addItemMutation.mutate(data)} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
            </div>
          </div>
        </Layout>
    )
}

export default AddSubscription
