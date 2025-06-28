import { MdDelete, MdEdit } from "react-icons/md"
import { Link } from "react-router-dom"
import { IBlog } from "src/interfaces"

interface IProps {
  blog: IBlog
  setDeleteItemId: React.Dispatch<React.SetStateAction<string>>
}

const BlogCard = ({ blog, setDeleteItemId }: IProps ) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-bold text-green-400">Active</span>
        <div className="flex items-center gap-3">
          <Link to={`/blogs/${blog.id}/edit`}>
            <MdEdit className="w-5 h-5 cursor-pointer" />
          </Link>
          <MdDelete onClick={() => setDeleteItemId(blog.id || "")} className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <span className="text-lg font-semibold">
        {blog?.title}
      </span>
      -
      <span className="text-sm">
        {blog?.author?.name}
      </span>
    </div>
  )
}

export default BlogCard