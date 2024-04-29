// import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
// import { Link } from "react-router-dom"
import { apiAdminDeleteBusiness, apiAdminGetBilllboards } from "src/services/CommonService"
import { IBillboard } from "src/interfaces"
// import BusinessCard from "./fragments/BusinessCard"
import { columnsMaker } from "./columns"
import { DataTable } from "src/components/DataTable"
import { useState } from "react"
import NoResult from "src/components/NoResult"
import useMutations from "src/hooks/useMutation"
import { toast } from "react-toastify"
import Loader from "src/components/Loader"
import DeleteItemModal from "src/assets"


const AllBillboards = () => {
    // const { user } = useAuthContext()
    const [editBusiness, setEditBusiness] = useState('')
    const [deleteBusiness, setDeleteBusiness] = useState('')

    
    const { data: billboards, isLoading, refetch } = useFetch<IBillboard[]>({
      api: apiAdminGetBilllboards,
      key: ["billboards"],
      param: {
        page: 1,
        num_per_page: 40
      }
    })
    console.log({billboards, editBusiness})

    
    const deleteBussinessMutation = useMutations<string, any>(
        apiAdminDeleteBusiness,
    {
        onSuccess: (data: any) => {
            console.log("data", data)
            toast.success("Business Deleted Successfully")
            setDeleteBusiness("")
            refetch()
        },
        showErrorMessage: true,
        requireAuth: true,
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
            {
                (deleteBussinessMutation?.isLoading) && <Loader />
            }
            <DeleteItemModal
                deleteFunc={() => deleteBussinessMutation.mutate(deleteBusiness)}
                isOpen={deleteBusiness} 
                setIsOpen={setDeleteBusiness} 
                desc='Are you sure you want to delete this Business?'
            />
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">All billboards</h1>
            {/* <div className="flex flex-end">
              <Link to={"/billboards/add"}>Add Business</Link>
            </div> */}
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

export default AllBillboards
