import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
import { apiAdminDeletePaymentPlan, apiAdminGetPlansBySubscriptionString, apiAdminGetSubscriptionByString } from "src/services/CommonService"
import { IPlan, ISubscription } from "src/interfaces"
import { DataTable } from "src/components/DataTable"
import { useState } from "react"
import NoResult from "src/components/NoResult"
import useMutations from "src/hooks/useMutation"
import { toast } from "react-toastify"
import Loader from "src/components/Loader"
import DeleteItemModal from "src/assets"
import { Link, useParams } from "react-router-dom"
import Button from "src/components/Button"
import { columnsMaker } from "./subscription-plans-columns"


const AllSubscriptionPlans = () => {
    const { id } = useParams();

    // const { user } = useAuthContext()
    const [editBusiness, setEditBusiness] = useState('')
    const [deleteBusiness, setDeleteBusiness] = useState('')

    console.log({editBusiness, deleteBusiness})
    
    const { data: plans, isLoading, refetch } = useFetch<IPlan[]>({
      api: apiAdminGetPlansBySubscriptionString,
      key: ["subscriptions", String(id), "plans"],
      param: id
    //   param: {
    //     id: string
    //     page: 1,
    //     num_per_page: 40
    //   }
    })

    const { data: subscription } = useFetch<ISubscription>({
      api: apiAdminGetSubscriptionByString,
      key: ["subscriptions", String(id)],
      param: id
    })

    
    const deleteBussinessMutation = useMutations<string, any>(
        apiAdminDeletePaymentPlan,
    {
        onSuccess: (data: any) => {
            console.log("data", data)
            toast.success("plan Deleted Successfully")
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

    console.log({ plans })

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
                desc='Are you sure you want to delete this plan?'
            />
          <div className="flex flex-col gap-1 p-6 mb-6">
            <div className="flex flex-col justify-between md:flex-row">
              <h1 className="text-xl">{subscription?.package} - All Plans</h1>
              <Button className="flex p-2.5 flex-end">
                <Link to={`/subscriptions/${id}/add-plan`}>Add Plan</Link>
              </Button>
            </div>
            <div className="mt-12">
            {
                (plans?.length && plans?.length > 0) ?
                      <DataTable 
                          title="Sub plans"
                          columns={columns} 
                          data={plans || []} 
                          // onPaginationChange={onPaginationChange}
                          // pageCount={Math.floor(Number(adverts?.length || 0)/pagination.pageSize)}
                          // pagination={pagination}
                          // onSortingChange={onSortingChange}
                          // sorting={sorting}
                      />
                                  :
                      <NoResult
                          isLoading={isLoading}
                          image={""}
                          desc='Add Plan to your dashboard and start to see  them here.' 
                          buttonText='Add Plan'
                          onClick={() => ""}
                      />
              }
            </div>
          </div>
        </Layout>
    )
}

export default AllSubscriptionPlans
