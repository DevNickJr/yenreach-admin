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
    company_name: "",
    job_title: '',
    job_type: '',
    salary: '',
    location: '',
    job_overview: "",
    job_benefit: "",
    job_link: "",
    job_tags: "",
    admin_string: "",
    expiry_date: ""
}

type Action = "reset" | "company_name" | "job_title" | "job_type" | "location" | "salary" | "job_link" | "job_benefit" | "job_overview" | "expiry_date"

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

    const addItemMutation = useMutations<IJob, any>(
    apiAdminAddJob,
    {
    onSuccess: (data: any) => {
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
          {addItemMutation?.isLoading && <Loader />}

          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Job Layout</h1>
            <div className="flex flex-col gap-4 mt-12">
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Comany Name</span>
                    <input value={job.company_name} onChange={e => handleChange("company_name", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Job Title</span>
                    <input value={job.job_title} onChange={e => handleChange("job_title", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Job Type</span>
                    <input value={job.job_type} onChange={e => handleChange("job_type", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
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
                    <input value={job.job_link} onChange={e => handleChange("job_link", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Expiry Date</span>
                    <input value={job.expiry_date} onChange={e => handleChange("expiry_date", e.target.value)} type="date" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Job Description</span>
                    <textarea value={job.job_overview} onChange={e => handleChange("job_overview", e.target.value)} rows={6} className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Job Perks and benefits</span>
                    <textarea value={job.job_benefit} onChange={e => handleChange("job_benefit", e.target.value)} rows={6} className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <Button onClick={() => addItemMutation.mutate({ ...job, admin_string: user?.verify_string || "" })} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
            </div>
          </div>
        </Layout>
    )
}

export default AddJob
