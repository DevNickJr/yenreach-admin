import { MdDelete } from "react-icons/md"
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
        <div className="flex">
          <MdDelete onClick={() => setDeleteItemId(blog.blog_string || "")} className="w-5 h-5 cursor-pointer" />
        </div>
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