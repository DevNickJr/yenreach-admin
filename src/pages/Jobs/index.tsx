import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import JobCard from "./fragments/JobCard"
import Layout from 'src/layout'
import { Link } from "react-router-dom"
import { apiDeleteJob, apiGetAllJobsAdmin } from "src/services/JobService"
import { IDelete, IJob, IResponse } from "src/interfaces"
import DeleteItemModal from "src/components/modals/DeleteItemModal"
import useMutations from "src/hooks/useMutation"
import { toast } from "react-toastify"
import { useState } from "react"
import Loader from "src/components/Loader"
import Pagination from "src/components/Pagination"

const Jobs = () => {
  const { user, isLoggedIn } = useAuthContext()
  const [deleteItemId, setDeleteItemId] = useState('')
  const [page, setPage] = useState(1)
  const num_per_page = 20

  const { data, refetch, isLoading, remove } = useFetch<IResponse<IJob[]>>({
    api: apiGetAllJobsAdmin,
    key: ["jobs", String(page), String(num_per_page)],
    param: { page, num_per_page },
    enabled: !!isLoggedIn,
    select: (a: any) => a
  })

    // console.log({data, user})

    const deleteItemMutation = useMutations<IDelete, any>(
      apiDeleteJob,
  {
      onSuccess: (data: any) => {
          console.log("data", data)
          toast.success("Item Deleted Successfully.")
          refetch()
          // remove()
          setDeleteItemId('')
      },
      showErrorMessage: true,
      requireAuth: true,
      id: deleteItemId,
  })

  const handlePageChange = (page: number) => {
    setPage(page)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  
    return (
        <Layout>
          {(deleteItemMutation?.isLoading || isLoading) && <Loader />}
          <DeleteItemModal
            deleteFunc={() => deleteItemMutation.mutate({ id: deleteItemId, admin_string: user?.verify_string || "" })}
            isOpen={deleteItemId} 
            setIsOpen={setDeleteItemId} 
            desc='Are you sure you want to delete this Agent?'
          />
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Job Layout</h1>
            <div className="flex flex-end">
              <Link to={"/jobs/add"}>Add Job</Link>
            </div>
            <div className="flex flex-col gap-4 mt-12">
              {
                data?.data?.map((job: IJob) => (
                  <JobCard setDeleteItemId={setDeleteItemId} key={job?.id} job={job} />
                ))
              }
            </div>
            <Pagination
                page={page} 
                num_per_page={num_per_page} 
                data={data?.data || []} 
                handlePageChange={handlePageChange} 
                total={data?.total || 0} 
              />
          </div>
        </Layout>
    )
}

export default Jobs
