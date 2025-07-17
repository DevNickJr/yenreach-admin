import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
import { apiAdminGetBilllboards, apiAdminGetPendingBillboards } from "src/services/CommonService"
import { IBillboard, IPaginatedResponse, IResponse } from "src/interfaces"
import { columnsMaker } from "./columns"
import { DataTable } from "src/components/DataTable"
import { useState } from "react"
import NoResult from "src/components/NoResult"
import { usePagination } from "src/hooks/usePagination"
import { useNavigate } from "react-router-dom"


const PendingBillboard = () => {
    const [, setEditBusiness] = useState('')
    const [, setDeleteBusiness] = useState('')

    // console.log({editBusiness, deleteBusiness})
    const { onPaginationChange, pagination, page } = usePagination()

    const { data: billboards, isLoading, refetch } = useFetch<IPaginatedResponse<IBillboard[]>>({
      api: apiAdminGetBilllboards,
      key: ["billboards", page, pagination.pageSize],
      param: {
        page: page,
        num_per_page: pagination.pageSize,
        status: "pending"
      }
    })

    
    // const { data: billboards, isLoading } = useFetch<IPaginatedResponse<IBillboard[]>>({
    //   api: apiAdminGetPendingBillboards,
    //   key: ["pending-billboards", page, pagination.pageSize],
    //   param: {
    //     page: page,
    //     num_per_page: pagination.pageSize,
    //   }
    // })

    const columns = columnsMaker({
      editFunc: (id: string) => setEditBusiness(id),
      deleteFunc: (id: string) => setDeleteBusiness(id),
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
          <div className="flex flex-col gap-1 p-6 mb-6">
          <h1 className="text-xl">Pending billboards</h1>
            <div className="mt-12">
            {
                (billboards?.data?.length && billboards?.data?.length > 0) ?
                      <DataTable 
                          title="billboards"
                          columns={columns} 
                          data={billboards?.data || []} 
                          onPaginationChange={onPaginationChange}
                          pageCount={billboards?.totalPages}
                          pagination={pagination}
                          // pageCount={billboards?.totalPages}
                          // onSortingChange={onSortingChange}
                          // sorting={sorting}
                      />
                                  :
                      <NoResult
                          isLoading={isLoading}
                          image={""}
                          desc='Add business to billboard and start to see billboards here.' 
                          buttonText='Add to Billboard'
                          onClick={() => navigate("/businesses/all")}
                      />
              }
            </div>
          </div>
        </Layout>
    )
}

export default PendingBillboard
