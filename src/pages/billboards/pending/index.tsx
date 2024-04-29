import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
import { apiAdminGetPendingBillboards } from "src/services/CommonService"
import { IBillboard } from "src/interfaces"
import { columnsMaker } from "./columns"
import { DataTable } from "src/components/DataTable"
import { useState } from "react"
import NoResult from "src/components/NoResult"


const PendingBillboard = () => {
    const [editBusiness, setEditBusiness] = useState('')
    const [deleteBusiness, setDeleteBusiness] = useState('')

    console.log({editBusiness, deleteBusiness})
    
    const { data: billboards, isLoading } = useFetch<IBillboard[]>({
      api: apiAdminGetPendingBillboards,
      key: ["pending-billboards"],
      param: {
        page: 1,
        num_per_page: 40
      }
    })

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

    console.log({billboards})
  
    return (
        <Layout>
          <div className="flex flex-col gap-1 p-6 mb-6">
          <h1 className="text-xl">Pending billboards</h1>
            <div className="mt-12">
            {
                (billboards?.length && billboards?.length > 0) ?
                      <DataTable 
                          title="billboards"
                          columns={columns} 
                          data={billboards || []} 
                          // onPaginationChange={onPaginationChange}
                          // pageCount={Math.floor(Number(billboards?.length || 0)/pagination.pageSize)}
                          // pagination={pagination}
                          // onSortingChange={onSortingChange}
                          // sorting={sorting}
                      />
                                  :
                      <NoResult
                          isLoading={isLoading}
                          image={""}
                          desc='Add bussinesses to your dashboard and start to see billboards here.' 
                          buttonText='Add Business'
                          onClick={() => ""}
                      />
              }
            </div>
          </div>
        </Layout>
    )
}

export default PendingBillboard
