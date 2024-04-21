// import { useMemo } from "react"
import { MdDelete } from "react-icons/md"
import { IJob } from "src/interfaces"
import { daysAgo } from "src/utils/dateFunc"

interface IProps {
  job: IJob
  setDeleteItemId: React.Dispatch<React.SetStateAction<string>>
}

const JobCard = ({ job, setDeleteItemId }: IProps) => {
  // const status = useMemo(() => job?.status==="1" ? Date.parse(job?.expiry_date) < Date.now() ? "Expired" : "Active" : "Inactive", [job?.expiry_date, job?.status])

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between gap-8 mb-2">
        <div className="flex items-center gap-3">
          <span className="font-semibold md:text-lg">
            {job?.job_title}
          </span>
          -
          <span className="text-xs md:text-sm">
            {job?.company_name}
          </span>
        </div>
        {/* <span className="font-bold text-green-400">{status}</span> */}
        <div className="flex">
          <MdDelete onClick={() => setDeleteItemId(job.job_string || "")} className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-between w-full gap-8">
        <h2 className="text-xs font-semibold text-blue">
          Posted {daysAgo(Number(job?.created_at)) ? daysAgo(Number(job?.created_at))=== 1 ? "yesterday" : `${daysAgo(Number(job?.created_at))} days ago` : "today"}
        </h2>
        <div className={`rounded-full px-3 py-1  text-xs ${ (job?.status==="1" && !(Date.parse(job?.expiry_date) < (Date.now() - 1000*60*60*24))) ? "text-green bg-green-light" : "text-red-400 bg-red-100" }`}>
          { job?.status==="1" ? Date.parse(job?.expiry_date) < (Date.now() - 1000*60*60*24) ? "Expired" : "Active" : "Inactive" }
        </div>
      </div> 
    </div>
  )
}

export default JobCard