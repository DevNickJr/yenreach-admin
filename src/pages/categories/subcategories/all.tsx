// import useFetch from "src/hooks/useFetch"
// import Layout from 'src/layout'
// import { apiAdminDeleteSubCategory, apiAdminGetSubCategories } from "src/services/CommonService"
// import { ISubCategory } from "src/interfaces"
// import { columnsMaker } from "./columns"
// import { DataTable } from "src/components/DataTable"
// import { useState } from "react"
// import NoResult from "src/components/NoResult"
// import useMutations from "src/hooks/useMutation"
// import { toast } from "react-toastify"
// import Loader from "src/components/Loader"
// import DeleteItemModal from "src/assets"


// const AllSubCategories = () => {
//     // const { user } = useAuthContext()
//     const [editSubCat, setEditSubCat] = useState('')
//     const [deleteSubCat, setDeleteSubCat] = useState('')

//     console.log({editSubCat, deleteSubCat})
    
//     const { data: categories, isLoading, refetch } = useFetch<ISubCategory[]>({
//       api: apiAdminGetSubCategories,
//       key: ["subcategories"],
//       param: {
//         page: 1,
//         num_per_page: 40
//       }
//     })

    
//     const deleteBussinessMutation = useMutations<string, any>(
//       apiAdminDeleteSubCategory,
//     {
//         onSuccess: (data: any) => {
//             console.log("data", data)
//             toast.success("Sub Category Deleted Successfully")
//             setDeleteSubCat("")
//             refetch()
//         },
//         showErrorMessage: true,
//         requireAuth: true,
//     })

//     const columns = columnsMaker({
//       editFunc: (id: string) => setEditSubCat(id),
//       deleteFunc: (id: string) => setDeleteSubCat(id),
//     })

//     console.log({ categories })

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
//                 deleteFunc={() => deleteBussinessMutation.mutate(deleteSubCat)}
//                 isOpen={deleteSubCat} 
//                 setIsOpen={setDeleteSubCat} 
//                 desc='Are you sure you want to delete this Sub category?'
//             />
//           <div className="flex flex-col gap-1 p-6 mb-6">
//             <h1 className="text-xl">All Sub Categories</h1>
//             {/* <div className="flex flex-end">
//               <Link to={"/adverts/add"}>Add Sub category</Link>
//             </div> */}
//             <div className="mt-12">
//             {
//                 (categories?.length && categories?.length > 0) ?
//                       <DataTable 
//                           title="Sub-Categories"
//                           columns={columns} 
//                           data={categories || []} 
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
//                           desc='Add subcategory to your dashboard and start to see them here.' 
//                           buttonText='Add Sub Category'
//                           onClick={() => ""}
//                       />
//               }
//             </div>
//           </div>
//         </Layout>
//     )
// }

// export default AllSubCategories
