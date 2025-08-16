// import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
// import { Link } from "react-router-dom"
import { apiAdminDeleteSetting, apiAdminGetSettings } from "src/services/CommonService"
import { ISetting, IResponse } from "src/interfaces"
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
import { useNavigate } from "react-router-dom"


const AllSettings = () => {
    // const { user } = useAuthContext()
    const [, setEditAdmin] = useState('')
    const [deleteAdmin, setDeleteAdmin] = useState('')

    const { onPaginationChange, pagination, page } = usePagination()

    const { data, isLoading, refetch } = useFetch<IResponse<ISetting[]>>({
      api: apiAdminGetSettings,
      select: ((d) => d),
      key: ["admins", page, pagination.pageSize],
      param: {
        page: page,
        num_per_page: pagination.pageSize
      }
    })

    const deleteAdminMutation = useMutations<{ id: string }, unknown>(
        apiAdminDeleteSetting,
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

    const navigate = useNavigate()

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
            <h1 className="text-xl">Settings</h1>
            {/* <div className="flex flex-end">
              <Link to={"/admins/add"}>Add Admin</Link>
            </div> */}
            <div className="mt-12">
            {
                (data?.data?.length && data?.data?.length > 0) ?
                      <DataTable 
                          title="Settings"
                          columns={columns} 
                          data={data?.data || []} 
                          onPaginationChange={onPaginationChange}
                          pageCount={1}
                          pagination={pagination}
                          // onSortingChange={onSortingChange}
                          // sorting={sorting}
                      />
                                  :
                      <NoResult
                          isLoading={isLoading}
                          image={""}
                          desc='Add Settings to your dashboard' 
                          buttonText='Add Setting'
                          onClick={() => navigate('/settings/add')}
                      />
              }
            </div>
          </div>
        </Layout>
    )
}

export default AllSettings
