// import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
import { apiAdminDeleteBillboard, apiAdminGetBilllboards } from "src/services/CommonService"
import { IBillboard, IPaginatedResponse } from "src/interfaces"
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


const AllBillboards = () => {
    const [, setEditBillboard] = useState('')
    const [deleteBillboard, setDeleteBillboard] = useState('')
    const { onPaginationChange, pagination, page } = usePagination()
    const [status, setStatus] = useState('')
    
    const { data: billboards, isLoading, refetch } = useFetch<IPaginatedResponse<IBillboard[]>>({
      api: apiAdminGetBilllboards,
      key: ["billboards", page, pagination.pageSize, status],
      param: {
        page: page,
        num_per_page: pagination.pageSize,
        status
      }
    })

    const deleteBillboardMutation = useMutations<{ id: string }, unknown>(
        apiAdminDeleteBillboard,
    {
        onSuccess: (data: unknown) => {
            console.log("data", data)
            toast.success("Billboard Deleted Successfully")
            setDeleteBillboard("")
            refetch()
        },
        showErrorMessage: true,
        requireAuth: true,
    })

    const columns = columnsMaker({
      editFunc: (id: string) => setEditBillboard(id),
      deleteFunc: (id: string) => setDeleteBillboard(id),
    })

    const navigate = useNavigate()

    return (
        <Layout>
            {
                (deleteBillboardMutation?.isLoading) && <Loader />
            }
            <DeleteItemModal
                deleteFunc={() => deleteBillboardMutation.mutate({ id: deleteBillboard })}
                isOpen={deleteBillboard} 
                setIsOpen={setDeleteBillboard} 
                desc='Are you sure you want to delete this Billboard?'
            />
          <div className="flex flex-col gap-1 p-6 mb-6">
            <div className="flex items-center gap-3 flex-wrap justify-between">
              <h1 className="text-xl capitalize">{status ? status : 'All'} billboards</h1>
              <select
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                className="border-2 border-gray-300 rounded-md px-3 py-2"
              >
                <option value="">All</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            {/* <div className="flex flex-end">
              <Link to={"/billboards/add"}>Add Billboard</Link>
            </div> */}
            <div className="mt-12">
            {
                (billboards?.data?.length && billboards?.data?.length > 0) ?
                      <DataTable 
                          title="billboards"
                          columns={columns} 
                          data={billboards?.data || []} 
                          onPaginationChange={onPaginationChange}
                          pagination={pagination}
                          pageCount={billboards?.totalPages}
                          // pageCount={1}
                          // onSortingChange={onSortingChange}
                          // sorting={sorting}
                      />
                                  :
                      <NoResult
                          isLoading={isLoading}
                          image={""}
                          desc='Add Billboard to billboard and start to see billboards here.' 
                          buttonText='Add to Billboard'
                          onClick={() => navigate("/Billboardes/all")}
                      />
              }
            </div>
          </div>
        </Layout>
    )
}

export default AllBillboards
