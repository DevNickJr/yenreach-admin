import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import BlogCard from "./fragments/BlogCard"
import Layout from 'src/layout'
import { IBlog, IDelete } from "src/interfaces"
import { apiAdminGetBlogs } from "src/services/CommonService"
import useMutations from "src/hooks/useMutation"
import { apiDeleteBlog } from "src/services/BlogService"
import { toast } from "react-toastify"
import { useState } from "react"
import DeleteItemModal from "src/assets"
import { Link } from "react-router-dom"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
// import Button from "src/components/Button"
// import { Link } from "react-router-dom"


const Jobs = () => {
    const { user, isLoggedIn } = useAuthContext()
  const [deleteItemId, setDeleteItemId] = useState('')

    const { data, refetch, isLoading } = useFetch<IBlog[]>({
      api: apiAdminGetBlogs,
      key: ["blogs"],
      enabled: !!isLoggedIn
    })


    
    const deleteItemMutation = useMutations<IDelete, unknown>(
      apiDeleteBlog,
  {
      onSuccess: (data: unknown) => {
          console.log("data", data)
          toast.success("Blog Deleted Successfully.")
          refetch()
          // remove()
          setDeleteItemId('')
      },
      showErrorMessage: true,
      requireAuth: true,
      id: deleteItemId,
  })



 
    // console.log({data, user})
  
    return (
        <Layout>
          {(isLoading || deleteItemMutation?.isLoading) && <Loader />}

            <DeleteItemModal
              deleteFunc={() => deleteItemMutation.mutate({ id: deleteItemId })}
              isOpen={deleteItemId} 
              setIsOpen={setDeleteItemId} 
              desc='Are you sure you want to delete this Blog?'
            />
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Blog Layout</h1>
            <div className="flex flex-end mt-6">
              <Button className="p-2">
                <Link to={"/blogs/add"}>Add Blog</Link>
              </Button>
            </div>
            <div className="flex flex-col gap-4 mt-12">
              {
                data?.map((blog: IBlog) => (
                  <BlogCard setDeleteItemId={setDeleteItemId} key={blog?.id} blog={blog} />
                ))
              }
            </div>
          </div>
        </Layout>
    )
}

export default Jobs
