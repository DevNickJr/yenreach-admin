import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import BlogCard from "./fragments/BlogCard"
import Layout from 'src/layout'
import { Link } from "react-router-dom"
import { IBlog } from "src/interfaces"
import { apiAdminGetBlogs } from "src/services/CommonService"


const Jobs = () => {
    const { user, isLoggedIn } = useAuthContext()
    const { data } = useFetch<IBlog[]>({
      api: apiAdminGetBlogs,
      key: ["blogs"],
      enabled: !!isLoggedIn
    })

 
    // console.log({data, user})
  
    return (
        <Layout>
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Blog Layout</h1>
            <div className="flex flex-end">
              <Link to={"/jobs/add"}>Add Job</Link>
            </div>
            <div className="flex flex-col gap-4 mt-12">
              {
                data?.map((blog: IBlog) => (
                  <BlogCard key={blog?.id} blog={blog} />
                ))
              }
            </div>
          </div>
        </Layout>
    )
}

export default Jobs
