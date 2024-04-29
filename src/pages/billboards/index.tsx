import { useAuthContext } from "src/hooks/useAuthContext"
import Layout from 'src/layout'
import { Link } from "react-router-dom"
// import useFetch from "src/hooks/useFetch"
// import { apiAdminGetBillboards } from "src/services/CommonService"
// import { IBusiness } from "src/interfaces"
// // import BusinessCard from "./fragments/BusinessCard"
// import { columnsMaker } from "./columns"
// import { DataTable } from "src/components/DataTable"
// import { useState } from "react"
// import NoResult from "src/components/NoResult"
import Button from "src/components/Button"


const Billboards = () => {
    const { user } = useAuthContext()
    // const [editBusiness, setEditBusiness] = useState('')
    // const [deleteBusiness, setDeleteBusiness] = useState('')

    // console.log({editBusiness, deleteBusiness})
    
    // const { data: Billboards, isLoading } = useFetch<IBusiness[]>({
    //   api: apiAdminGetBillboards,
    //   key: ["Billboards"],
    //   param: {
    //     page: 1,
    //     num_per_page: 40
    //   }
    // })

    // const columns = columnsMaker({
    //   editFunc: (id: string) => setEditBusiness(id),
    //   deleteFunc: (id: string) => setDeleteBusiness(id),
    // })

    // useEffect(() => {
    //   const fn = async () => {
    //     const response = await fetch("https://yenreach.site/api/jobs/fetch_all_job_api.php")
    //     const value = await response.json()
    //     setJobs(value)
    //   }

    //   fn()
    // }, [])

    // console.log({Billboards})
  
    return (
        <Layout>
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Business Layout</h1>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button className="p-2">
                <Link to={"/billboards/pending"}>View Pending Billboards</Link>
              </Button>
              <Button className="p-2">
                <Link to={"/billboards/all"}>View all Billboards</Link>
              </Button>
              {/* <Button className="p-2">
                <Link to={"/billboards/add"}>Add Business</Link>
              </Button> */}
            </div>
            {/* <Button className="p-2">
              <Link to={"/billboards/add"}>Add Business</Link>
            </Button> */}
            {/* <div className="mt-12">
            {
                (Billboards?.length && Billboards?.length > 0) ?
                      <DataTable 
                          title="Billboards"
                          columns={columns} 
                          data={Billboards || []} 
                          // onPaginationChange={onPaginationChange}
                          // pageCount={Math.floor(Number(Billboards?.length || 0)/pagination.pageSize)}
                          // pagination={pagination}
                          // onSortingChange={onSortingChange}
                          // sorting={sorting}
                      />
                                  :
                      <NoResult
                          isLoading={isLoading}
                          image={""}
                          desc='Add bussinesses to your dashboard and start to see Billboards here.' 
                          buttonText='Add Business'
                          onClick={() => ""}
                      />
              }
            </div> */}
          </div>
        </Layout>
    )
}

export default Billboards
