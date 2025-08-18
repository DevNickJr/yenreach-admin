// import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
// import { Link } from "react-router-dom"
import { IBlackFriday, IResponse } from "src/interfaces"
// import AdminCard from "./fragments/AdminCard"
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
import { apiAdminDeleteBlackProduct, apiGetBlackProducts } from "src/services/ProductService"


const BlackFriday = () => {
    // const { user } = useAuthContext()
    const [, setEditAdmin] = useState('')
    const [deleteDeal, setDelete] = useState('')

    const { onPaginationChange, pagination, page } = usePagination()

    const { data, isLoading, refetch } = useFetch<IResponse<IBlackFriday[]>>({
      api: apiGetBlackProducts,
      // select: ((d) => d),
      key: ["blacked", page, pagination.pageSize],
      param: {
        page: page,
        num_per_page: pagination.pageSize
      }
    })

    const deleteDealMutation = useMutations<{ id: string }, unknown>(
        apiAdminDeleteBlackProduct,
    {
        onSuccess: (data: unknown) => {
            console.log("data", data)
            toast.success("Deal Deleted Successfully")
            setDelete("")
            refetch()
        },
        showErrorMessage: true,
        requireAuth: true,
        id: deleteDeal,
    })

    const columns = columnsMaker({
      editFunc: (id: string) => setEditAdmin(id),
      deleteFunc: (id: string) => setDelete(id),
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
            {
                (deleteDealMutation?.isLoading) && <Loader />
            }
            <DeleteItemModal
                deleteFunc={() => deleteDealMutation.mutate({ id: deleteDeal })}
                isOpen={deleteDeal} 
                setIsOpen={setDelete} 
                desc='Are you sure you want to delete this Admin?'
            />
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Black Friday Deals</h1>
            {/* <div className="flex flex-end">
              <Link to={"/admins/add"}>Add Admin</Link>
            </div> */}
            <div className="mt-12">
            {
                (data?.data?.length && data?.data?.length > 0) ?
                      <DataTable 
                          title="Products"
                          columns={columns} 
                          data={data?.data || []} 
                          onPaginationChange={onPaginationChange}
                          pageCount={1}
                          pagination={pagination}
                          // onSortingChange={onSortingChange}
                          // sorting={sorting}
                      />
                                  :
                      <NoResult
                          isLoading={isLoading}
                          image={""}
                          desc='You can create a product from businesses page' 
                          buttonText='Add Product'
                          onClick={() => navigate('/businesses/all')}
                      />
              }
            </div>
          </div>
        </Layout>
    )
}

export default BlackFriday
