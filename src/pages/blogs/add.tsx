import { useReducer, useRef } from "react"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import TinymceWrapper from "src/components/TinymceWrapper"
import { useAuthContext } from "src/hooks/useAuthContext"
import useImage from "src/hooks/useImage"
import useMutations from "src/hooks/useMutation"
import { IAddBlog } from "src/interfaces"
import Layout from 'src/layout'
import { apiAdminAddBlog } from "src/services/BlogService"
import { Editor } from "tinymce"

const initialState: IAddBlog = { 
    title: "",
    author: "",
    post: "",
    snippet: "",
    admin_string : "",
    file_path: "",
}

type Action = "reset" | "title" | "author" | "post" | "snippet" | "admin_string" | "file_path"

interface IAction {
    type: Action,
    payload: string
}

const AddBlog = () => {
  const { user } = useAuthContext()

  const { url: img, uploadImage: uploadImg, loading: uploadingImg } = useImage()

  const ref = useRef<Editor | null>(null)
  const [blog, setBlog] = useReducer((state: IAddBlog, action: IAction) => {
    if (action.type === "reset") {
        return initialState
    }
    return {
        ...state,
        [action.type]: action.payload
    }
  }, initialState)

  const addItemMutation = useMutations<IAddBlog, unknown>(
    apiAdminAddBlog,
    {
    onSuccess: (data: unknown) => {
        console.log("data", data)
        toast.success("Blog Added Successfully.")
        setBlog({ type: "reset", payload: "" })
        ref?.current?.setContent("")
    },
    showErrorMessage: true,
    requireAuth: true,
})

  const handleChange = (type: Action, payload: string) => {
    setBlog({ type, payload })
  }
  
  const handleSubmit = () => {
    if (!img) {
      return toast.info("upload image")
    }
    addItemMutation.mutate({ ...blog, file_path: img, post: ref?.current?.getContent() || "", admin_string: user?.id || "" })
  }
  
  return (
    <Layout>
      {(addItemMutation?.isLoading || uploadingImg) && <Loader />}

      <div className="flex flex-col gap-1 p-6 mb-6">
        <h1 className="text-xl">Hi {user?.username}</h1>
        <h1>Your Blog Layout</h1>
        <div className="flex flex-col gap-4 mt-12">
            <div className="flex flex-col gap-1">
                <span className="text-xs">Title</span>
                <input value={blog.title} onChange={e => handleChange("title", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-xs">Author</span>
                <input value={blog.author} onChange={e => handleChange("author", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-xs">Image</span>
                <input onChange={(e) => uploadImg(e.target.files![0])}  type="file" className="p-2 px-3 text-sm rounded-md outline-none" />
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-xs">Snippet</span>
                <input maxLength={120} placeholder="(max 120 characters)" value={blog.snippet} onChange={e => handleChange("snippet", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-xs">Content</span>
                <TinymceWrapper ref={ref} />
            </div>
            <Button 
              onClick={handleSubmit} 
              className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">
                Submit
            </Button>
        </div>
      </div>
    </Layout>
  )
}

export default AddBlog