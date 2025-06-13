import { useReducer } from "react"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import { useAuthContext } from "src/hooks/useAuthContext"
import useMutations from "src/hooks/useMutation"
import { IJob } from "src/interfaces"
import Layout from 'src/layout'
import { apiAdminAddJob } from "src/services/JobService"

const initialState: IJob = { 
    companyName: '',
    businessId: '',
    title: '',
    type: '',
    location: '',
    salary: '',
    description: '',
    benefit: '',
    applicationMethod: '',
    overview: '',
    applicationExpiry: '',
    tags: [],
}

type Action = "reset" | "companyName" | "title" | "type" | "location" | "salary" | "applicationMethod" | "benefit" | "overview" | "applicationExpiry"

interface IAction {
    type: Action,
    payload: string
}

const AddJob = () => {
    const { user } = useAuthContext()
    const [job, setJob] = useReducer((state: IJob, action: IAction) => {
    if (action.type === "reset") {
        return initialState
    }
    return {
        ...state,
        [action.type]: action.payload
    }
    }, initialState)

    const addJobMutation = useMutations<IJob, unknown>(
        apiAdminAddJob,
        {
        onSuccess: (data: unknown) => {
            console.log("data", data)
            toast.success("Item Added Successfully.")
            setJob({ type: "reset", payload: "" })
        },
        showErrorMessage: true,
        requireAuth: true,
    })

    const handleChange = (type: Action, payload: string) => {
        setJob({ type, payload })
    }

    return (
        <Layout>
          {addJobMutation?.isLoading && <Loader />}

          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Job Layout</h1>
            <div className="flex flex-col gap-4 mt-12">
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Comany Name</span>
                    <input value={job.companyName} onChange={e => handleChange("companyName", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Job Title</span>
                    <input value={job.title} onChange={e => handleChange("title", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Job Type</span>
                    <input value={job.type} onChange={e => handleChange("type", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Location</span>
                    <input value={job.location} onChange={e => handleChange("location", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Salary</span>
                    <input value={job.salary} onChange={e => handleChange("salary", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Link</span>
                    <input value={job.applicationMethod} onChange={e => handleChange("applicationMethod", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Expiry Date</span>
                    <input value={job.applicationExpiry} onChange={e => handleChange("applicationExpiry", e.target.value)} type="date" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Job Description</span>
                    <textarea value={job.overview} onChange={e => handleChange("overview", e.target.value)} rows={6} className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Job Perks and benefits</span>
                    <textarea value={job.benefit} onChange={e => handleChange("benefit", e.target.value)} rows={6} className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <Button onClick={() => addJobMutation.mutate(job)} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
            </div>
          </div>
        </Layout>
    )
}

export default AddJob
