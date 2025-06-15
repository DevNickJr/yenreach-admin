import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
import { apiAdminDeleteCategory, apiAdminGetCategories } from "src/services/CommonService"
import { ICategory } from "src/interfaces"
import { columnsMaker } from "./columns"
import { DataTable } from "src/components/DataTable"
import { useState } from "react"
import NoResult from "src/components/NoResult"
import useMutations from "src/hooks/useMutation"
import { toast } from "react-toastify"
import Loader from "src/components/Loader"
import DeleteItemModal from "src/assets"
import { Link } from "react-router-dom"
import Button from "src/components/Button"
import { usePagination } from "src/hooks/usePagination"


const AllCategories = () => {
    // const { user } = useAuthContext()
    const [editBusiness, setEditBusiness] = useState('')
    const [deleteBusiness, setDeleteBusiness] = useState('')

    const { onPaginationChange, pagination, page } = usePagination()
    
    const { data: categories, isLoading, refetch } = useFetch<ICategory[]>({
      api: apiAdminGetCategories,
      key: ["categories", page, pagination.pageSize],
      param: {
        page: page,
        num_per_page: pagination.pageSize,
      }
    })

    
    const deleteBussinessMutation = useMutations<string, unknown>(
      apiAdminDeleteCategory,
    {
        onSuccess: (data: unknown) => {
            console.log("data", data)
            toast.success("Category Deleted Successfully")
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

    console.log({ categories })

    // useEffect(() => {
    //   const fn = async () => {
    //     const response = await fetch("https://yenreach.site/api/jobs/fetch_all_job_api.php")
    //     const value = await response.json()
    //     setJobs(value)
    //   }

    //   fn()
    // }, [])

    // console.log({adverts})
  
    return (
        <Layout>
            {
                (deleteBussinessMutation?.isLoading) && <Loader />
            }
            <DeleteItemModal
                deleteFunc={() => deleteBussinessMutation.mutate(deleteBusiness)}
                isOpen={deleteBusiness} 
                setIsOpen={setDeleteBusiness} 
                desc='Are you sure you want to delete this Category?'
            />
          <div className="flex flex-col gap-1 p-6 mb-6">
            <div className="flex flex-col justify-between md:flex-row">
              <h1 className="text-xl">All Categories</h1>
              <Button className="flex p-2.5 flex-end">
                <Link to={"/categories/add"}>Add Category</Link>
              </Button>
            </div>
            <div className="mt-12">
            {
                (categories?.length && categories?.length > 0) ?
                      <DataTable 
                          title="Categories"
                          columns={columns} 
                          data={categories || []} 
                          onPaginationChange={onPaginationChange}
                          pageCount={Math.floor(Number(categories?.length || 0)/pagination.pageSize)}
                          pagination={pagination}
                          // onSortingChange={onSortingChange}
                          // sorting={sorting}
                      />
                                  :
                      <NoResult
                          isLoading={isLoading}
                          image={""}
                          desc='Add bussinesses to your dashboard and start to see adverts here.' 
                          buttonText='Add Business'
                          onClick={() => ""}
                      />
              }
            </div>
          </div>
        </Layout>
    )
}

export default AllCategories
