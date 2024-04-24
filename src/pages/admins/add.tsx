import { useAuthContext } from "src/hooks/useAuthContext"
import Layout from 'src/layout'

// const initialState: IJob = { 
//     company_name: "",
//     job_title: '',
//     job_type: '',
//     salary: '',
//     location: '',
//     job_overview: "",
//     job_benefit: "",
//     job_link: "",
//     job_tags: "",
//     admin_string: "",
//     expiry_date: ""
// }

// type Action = "reset" | "company_name" | "job_title" | "job_type" | "location" | "salary"
// interface IAction {
//     type: Action,
//     payload: string
// }

const AddAdmin = () => {
  const { user } = useAuthContext()
//   const [job, setJob] = useReducer((state: IJob, action: IAction) => {
//     if (action.type === "reset") {
//         return initialState
//     }
//     return {
//         ...state,
//         [action.type]: action.payload
//     }
//   }, initialState)

//   const handleChange = (type: Action, payload: string) => {
//     setJob({ type, payload })
//   }
  
    return (
        <Layout>
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1 className="text-lg">Add Admin</h1>

            <div className="flex justify-center items-center h-full min-h-[400px]">
                Coming Soon
            </div>
            {/* <div className="flex flex-col gap-4 mt-12">
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
                    <input type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Expiry Date</span>
                    <input type="date" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Job Description</span>
                    <textarea rows={6} className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Job Perks and benefits</span>
                    <textarea rows={6} className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <button className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</button>
            </div> */}
          </div>
        </Layout>
    )
}

export default AddAdmin
