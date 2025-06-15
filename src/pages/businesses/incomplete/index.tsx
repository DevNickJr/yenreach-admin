import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
import { apiAdminGetBusinesses } from "src/services/CommonService"
import { IBusiness, IPaginatedResponse } from "src/interfaces"
import { columnsMaker } from "./columns"
import { DataTable } from "src/components/DataTable"
import { useState } from "react"
import NoResult from "src/components/NoResult"
import { usePagination } from "src/hooks/usePagination"


const IncompleteBusinesses = () => {
    const [, setEditBusiness] = useState('')
    const [, setDeleteBusiness] = useState('')
    const { onPaginationChange, pagination, page } = usePagination()
    
    const { data: businesses, isLoading } = useFetch<IPaginatedResponse<IBusiness[]>>({
      api: apiAdminGetBusinesses,
      key: ["Incomplete-businesses", page, pagination.pageSize],
      param: {
        page: page,
        num_per_page: pagination.pageSize,
        type: "incomplete",
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

    // console.log({businesses})
  
    return (
        <Layout>
          <div className="flex flex-col gap-1 p-6 mb-6">
          <h1 className="text-xl">Incomplete Businesses</h1>
            <div className="mt-12">
            {
                (businesses?.data?.length && businesses?.data?.length > 0) ?
                      <DataTable 
                          title="Businesses"
                          columns={columns} 
                          data={businesses?.data || []} 
                          onPaginationChange={onPaginationChange}
                          pagination={pagination}
                          pageCount={businesses?.totalPages}
                          // onSortingChange={onSortingChange}
                          // sorting={sorting}
                      />
                                  :
                      <NoResult
                          isLoading={isLoading}
                          image={""}
                          desc='Add bussinesses to your dashboard and start to see businesses here.' 
                          buttonText='Add Business'
                          onClick={() => ""}
                      />
              }
            </div>
          </div>
        </Layout>
    )
}

export default IncompleteBusinesses
