import { MdDelete } from "react-icons/md"
import { IBusiness } from "src/interfaces"

const AdminCard = ({ business }: { business: IBusiness}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-bold text-green-400">Active</span>
        <MdDelete className="w-5 h-5" />
      </div>
      <span className="text-lg font-semibold">
        {business?.name}
      </span>
      -
      <span className="text-sm">
        {business?.owner_name}
      </span>
    </div>
  )
}

export default AdminCard