import { useCallback, useEffect, useReducer, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import TinymceWrapper from "src/components/TinymceWrapper"
import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import useImage from "src/hooks/useImage"
import useMutations from "src/hooks/useMutation"
import { IAddBlog, IBlog } from "src/interfaces"
import Layout from 'src/layout'
import { apiAdminUpdateBlog } from "src/services/BlogService"
import { apiAdminGetBlog } from "src/services/CommonService"
import { Editor } from "tinymce"

const initialState: IAddBlog = { 
    title: "",
    author: "",
    post: "",
    snippet: "",
    admin_string : "",
    blog_string : "",
    file_path: "",
}

type Action = "reset" | "title" | "author" | "post" | "snippet" | "admin_string" | "file_path" | "blog_string"

interface IAction {
    type: Action,
    payload: string
}

const EditBlog = () => {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  const { url: img, uploadImage: uploadImg, loading: uploadingImg } = useImage()
  const { id } = useParams();

  const [editorReady, setEditorReady] = useState(false);
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

  const { data: blogPost, isLoading: blogPostLoading } = useFetch<IBlog>({
    api: apiAdminGetBlog,
    key: ["blog", id || ''],
    enabled: !!id,
    param: id,
  })

  const handleChange = useCallback((type: Action, payload: string) => {
    setBlog({ type, payload })
  }, [])
  
  useEffect(() => {
    if (blogPost && editorReady) {
        handleChange("title", blogPost.title)
        handleChange("author", blogPost.author)
        handleChange("blog_string", blogPost.blog_string)
        handleChange("file_path", blogPost.file_path)
        handleChange("post", blogPost.post)
        handleChange("snippet", blogPost.snippet)
        ref?.current?.setContent(blogPost.post)
    }
  }, [blogPost, handleChange, editorReady])

  const addItemMutation = useMutations<IAddBlog, unknown>(
    apiAdminUpdateBlog,
    {
    onSuccess: (data: unknown) => {
        console.log("data", data)
        toast.success("Blog Updated Successfully.")
        setBlog({ type: "reset", payload: "" })
        ref?.current?.setContent("")
        navigate('/blogs')
    },
    showErrorMessage: true,
    requireAuth: true,
})


  const handleSubmit = () => {
    if (!img && !blogPost?.file_path) {
      return toast.info("upload image")
    }
    addItemMutation.mutate({ ...blog, file_path: img || blogPost?.file_path || "", post: ref?.current?.getContent() || "", admin_string: user?.id || "" }) 
  }
  
  return (
    <Layout>
      {(addItemMutation?.isLoading || uploadingImg || blogPostLoading) && <Loader />}

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
                <TinymceWrapper ref={ref} onReady={() => setEditorReady(true)} />
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

export default EditBlog