// import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
// import { Link } from "react-router-dom"
import { apiAdminDeleteAdmin, apiAdminGetAdmins } from "src/services/CommonService"
import { IAdmin, IPaginatedResponse } from "src/interfaces"
// import AdminCard from "./fragments/AdminCard"
import { columnsMaker } from "./columns"
import { DataTable } from "src/components/DataTable"
import { useState } from "react"
import NoResult from "src/components/NoResult"
import useMutations from "src/hooks/useMutation"
import { toast } from "react-toastify"
import Loader from "src/components/Loader"
import DeleteItemModal from "src/assets"
import { usePagination } from "src/hooks/usePagination"


const AllAdmins = () => {
    // const { user } = useAuthContext()
    const [, setEditAdmin] = useState('')
    const [deleteAdmin, setDeleteAdmin] = useState('')

    const { onPaginationChange, pagination, page } = usePagination()

    const { data, isLoading, refetch } = useFetch<IPaginatedResponse<IAdmin[]>>({
      api: apiAdminGetAdmins,
      key: ["admins", page, pagination.pageSize],
      param: {
        page: page,
        num_per_page: pagination.pageSize
      }
    })

    const deleteAdminMutation = useMutations<{ id: string }, unknown>(
        apiAdminDeleteAdmin,
    {
        onSuccess: (data: unknown) => {
            console.log("data", data)
            toast.success("Admin Deleted Successfully")
            setDeleteAdmin("")
            refetch()
        },
        showErrorMessage: true,
        requireAuth: true,
        id: deleteAdmin,
    })

    const columns = columnsMaker({
      editFunc: (id: string) => setEditAdmin(id),
      deleteFunc: (id: string) => setDeleteAdmin(id),
    })

    // useEffect(() => {
    //   const fn = async () => {
    //     const response = await fetch("https://yenreach.site/api/jobs/fetch_all_job_api.php")
    //     const value = await response.json()
    //     setJobs(value)
    //   }

    //   fn()
    // }, [])

    return (
        <Layout>
            {
                (deleteAdminMutation?.isLoading) && <Loader />
            }
            <DeleteItemModal
                deleteFunc={() => deleteAdminMutation.mutate({ id: deleteAdmin })}
                isOpen={deleteAdmin} 
                setIsOpen={setDeleteAdmin} 
                desc='Are you sure you want to delete this Admin?'
            />
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Admins</h1>
            {/* <div className="flex flex-end">
              <Link to={"/admins/add"}>Add Admin</Link>
            </div> */}
            <div className="mt-12">
            {
                (data?.data?.length && data?.data?.length > 0) ?
                      <DataTable 
                          title="Admins"
                          columns={columns} 
                          data={data?.data || []} 
                          onPaginationChange={onPaginationChange}
                          pageCount={data?.totalPages}
                          pagination={pagination}
                          // onSortingChange={onSortingChange}
                          // sorting={sorting}
                      />
                                  :
                      <NoResult
                          isLoading={isLoading}
                          image={""}
                          desc='Add Admins to your dashboard' 
                          buttonText='Add Admin'
                          onClick={() => ""}
                      />
              }
            </div>
          </div>
        </Layout>
    )
}

export default AllAdmins
