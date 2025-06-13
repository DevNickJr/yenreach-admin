// import { useMemo } from "react"
import { MdDelete } from "react-icons/md"
import { IJob } from "src/interfaces"
import { daysAgo } from "src/utils/dateFunc"

interface IProps {
  job: IJob
  setDeleteItemId: React.Dispatch<React.SetStateAction<string>>
}

const JobCard = ({ job, setDeleteItemId }: IProps) => {
  // const status = useMemo(() => job?.status==="open" ? Date.parse(job?.applicationExpiry) < Date.now() ? "Expired" : "Active" : "Inactive", [job?.applicationExpiry, job?.status])

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between gap-8 mb-2">
        <div className="flex items-center gap-3">
          <span className="font-semibold md:text-lg">
            {job?.title}
          </span>
          -
          <span className="text-xs md:text-sm">
            {job?.companyName}
          </span>
        </div>
        {/* <span className="font-bold text-green-400">{status}</span> */}
        <div className="flex">
          <MdDelete onClick={() => setDeleteItemId(job.id || "")} className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-between w-full gap-8">
        <h2 className="text-xs font-semibold text-blue">
          Posted {daysAgo(Number(job?.createdAt)) ? daysAgo(Number(job?.createdAt))=== 1 ? "yesterday" : `${daysAgo(Number(job?.createdAt))} days ago` : "today"}
        </h2>
        <div className={`rounded-full px-3 py-1  text-xs ${ (job?.status==="open" && !(Date.parse(job?.applicationExpiry) < (Date.now() - 1000*60*60*24))) ? "text-green bg-green-light" : "text-red-400 bg-red-100" }`}>
          { job?.status==="open" ? Date.parse(job?.applicationExpiry) < (Date.now() - 1000*60*60*24) ? "Expired" : "Active" : "Inactive" }
        </div>
      </div> 
    </div>
  )
}

export default JobCard