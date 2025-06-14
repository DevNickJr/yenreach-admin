// // import { useAuthContext } from "src/hooks/useAuthContext"
// import useFetch from "src/hooks/useFetch"
// import Layout from 'src/layout'
// // import { Link } from "react-router-dom"
// import { apiAdminDeleteAdvert, apiAdminGetAdverts } from "src/services/CommonService"
// import { IAdvert } from "src/interfaces"
// // import BusinessCard from "./fragments/BusinessCard"
// import { columnsMaker } from "./columns"
// import { DataTable } from "src/components/DataTable"
// import { useState } from "react"
// import NoResult from "src/components/NoResult"
// import useMutations from "src/hooks/useMutation"
// import { toast } from "react-toastify"
// import Loader from "src/components/Loader"
// import DeleteItemModal from "src/assets"


// const AllAdverts = () => {
//     // const { user } = useAuthContext()
//     const [editBusiness, setEditBusiness] = useState('')
//     const [deleteBusiness, setDeleteBusiness] = useState('')

//     console.log({editBusiness, deleteBusiness})
    
//     const { data: adverts, isLoading, refetch } = useFetch<IAdvert[]>({
//       api: apiAdminGetAdverts,
//       key: ["adverts"],
//       param: {
//         page: 1,
//         num_per_page: 40
//       }
//     })

    
//     const deleteBussinessMutation = useMutations<string, any>(
//       apiAdminDeleteAdvert,
//     {
//         onSuccess: (data: any) => {
//             console.log("data", data)
//             toast.success("Advert Deleted Successfully")
//             setDeleteBusiness("")
//             refetch()
//         },
//         showErrorMessage: true,
//         requireAuth: true,
//     })

//     const columns = columnsMaker({
//       editFunc: (id: string) => setEditBusiness(id),
//       deleteFunc: (id: string) => setDeleteBusiness(id),
//     })

//     console.log({ adverts })

//     // useEffect(() => {
//     //   const fn = async () => {
//     //     const response = await fetch("https://yenreach.site/api/jobs/fetch_all_job_api.php")
//     //     const value = await response.json()
//     //     setJobs(value)
//     //   }

//     //   fn()
//     // }, [])

//     // console.log({adverts})
  
//     return (
//         <Layout>
//             {
//                 (deleteBussinessMutation?.isLoading) && <Loader />
//             }
//             <DeleteItemModal
//                 deleteFunc={() => deleteBussinessMutation.mutate(deleteBusiness)}
//                 isOpen={deleteBusiness} 
//                 setIsOpen={setDeleteBusiness} 
//                 desc='Are you sure you want to delete this Payment Type?'
//             />
//           <div className="flex flex-col gap-1 p-6 mb-6">
//             <h1 className="text-xl">Advert Payment Type</h1>
//             {/* <div className="flex flex-end">
//               <Link to={"/adverts/add"}>Add Business</Link>
//             </div> */}
//             <div className="mt-12">
//             {
//                 (adverts?.length && adverts?.length > 0) ?
//                       <DataTable 
//                           title="Adverts"
//                           columns={columns} 
//                           data={adverts || []} 
//                           // onPaginationChange={onPaginationChange}
//                           // pageCount={Math.floor(Number(adverts?.length || 0)/pagination.pageSize)}
//                           // pagination={pagination}
//                           // onSortingChange={onSortingChange}
//                           // sorting={sorting}
//                       />
//                                   :
//                       <NoResult
//                           isLoading={isLoading}
//                           image={""}
//                           desc='Add adverts paymemnt types to start to see them here.' 
//                           buttonText='Add Advert Payment types'
//                           onClick={() => ""}
//                       />
//               }
//             </div>
//           </div>
//         </Layout>
//     )
// }

// export default AllAdverts
