import { useAuthContext } from "src/hooks/useAuthContext"
import Layout from 'src/layout'
import { Link } from "react-router-dom"
// import useFetch from "src/hooks/useFetch"
// import { apiAdminGetadmins } from "src/services/CommonService"
// import { IBusiness } from "src/interfaces"
// // import BusinessCard from "./fragments/BusinessCard"
// import { columnsMaker } from "./columns"
// import { DataTable } from "src/components/DataTable"
// import { useState } from "react"
// import NoResult from "src/components/NoResult"
import Button from "src/components/Button"


const Admins = () => {
    const { user } = useAuthContext()
    // const [editBusiness, setEditBusiness] = useState('')
    // const [deleteBusiness, setDeleteBusiness] = useState('')

    // console.log({editBusiness, deleteBusiness})
    
    // const { data: admins, isLoading } = useFetch<IBusiness[]>({
    //   api: apiAdminGetadmins,
    //   key: ["admins"],
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

    // console.log({admins})
  
    return (
        <Layout>
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Admin Layout</h1>
            <div className="flex flex-wrap gap-4 mt-6">
              {/* <Button className="p-2">
                <Link to={"/admins/pending"}>View All Admins</Link>
              </Button> */}
              <Button className="p-2">
                <Link to={"/admins/all"}>View all Admins</Link>
              </Button>
              <Button className="p-2">
                <Link to={"/admins/add"}>Add Admin</Link>
              </Button>
            </div>
            {/* <Button className="p-2">
              <Link to={"/admins/add"}>Add Business</Link>
            </Button> */}
            {/* <div className="mt-12">
            {
                (admins?.length && admins?.length > 0) ?
                      <DataTable 
                          title="admins"
                          columns={columns} 
                          data={admins || []} 
                          // onPaginationChange={onPaginationChange}
                          // pageCount={Math.floor(Number(admins?.length || 0)/pagination.pageSize)}
                          // pagination={pagination}
                          // onSortingChange={onSortingChange}
                          // sorting={sorting}
                      />
                                  :
                      <NoResult
                          isLoading={isLoading}
                          image={""}
                          desc='Add bussinesses to your dashboard and start to see admins here.' 
                          buttonText='Add Business'
                          onClick={() => ""}
                      />
              }
            </div> */}
          </div>
        </Layout>
    )
}

export default Admins
