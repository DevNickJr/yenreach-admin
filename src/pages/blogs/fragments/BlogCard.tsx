import { MdDelete } from "react-icons/md"
import { IBlog } from "src/interfaces"

const BlogCard = ({ blog }: { blog: IBlog}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-bold text-green-400">Active</span>
        <MdDelete className="w-5 h-5" />
      </div>
      <span className="text-lg font-semibold">
        {blog?.title}
      </span>
      -
      <span className="text-sm">
        {blog?.author}
      </span>
    </div>
  )
}

export default BlogCard