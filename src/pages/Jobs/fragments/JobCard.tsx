import { MdDelete } from "react-icons/md"
import { IJob } from "src/interfaces"

const JobCard = ({ job }: { job: IJob}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-bold text-green-400">Active</span>
        <MdDelete className="w-5 h-5" />
      </div>
      <span className="text-lg font-semibold">
        {job?.job_title}
      </span>
      -
      <span className="text-sm">
        {job?.company_name}
      </span>
    </div>
  )
}

export default JobCard