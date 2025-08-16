import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
import { BusinessRegistrationState, IBusiness, IMutateQuery } from "src/interfaces"
import { apiAdminAddBusinessesOfTheWeek, apiAdminAddToBillboard, apiAdminApproveBusinesses, apiAdminGetOneBusinesses } from "src/services/CommonService"
import { useParams } from "react-router-dom"
import Loader from "src/components/Loader"
import Button from "src/components/Button"
import useMutations from "src/hooks/useMutation"
import { toast } from "react-toastify"
import { useState } from "react"
import BillboardModal from "src/components/modals/BillboardModal"
import { Link } from "react-router-dom"

const Business = () => {
    const { id } = useParams();
    const [decline, setDecline] = useState(false)
    const [remarks, setRemarks] = useState("")
    const [isOpen, setIsOpen] = useState('')

  
    const { data: business, isLoading } = useFetch<IBusiness>({
      api: apiAdminGetOneBusinesses,
      key: ["one-businesses", id || ""],
      param: { id },
      enabled: !!id
    })

    const approveBussinessMutation = useMutations<{ type: 'approve' | 'decline' }, unknown>(
        apiAdminApproveBusinesses,
    {
        onSuccess: (data: unknown) => {
            console.log("data", data)
            toast.success("Business Approved Successfully")
        },
        showErrorMessage: true,
        requireAuth: true,
        id
    })

    const makeWeekBussinessMutation = useMutations<{ id: string }, unknown>(
      apiAdminAddBusinessesOfTheWeek,
    {
        onSuccess: (data: unknown) => {
            console.log("data", data)
            toast.success("Business of the week set Successfully")
        },
        showErrorMessage: true,
        requireAuth: true,
        id
    })

    const addToBillboardMutation = useMutations<{ startDate: string, endDate: string; businessId: string }, unknown>(
      apiAdminAddToBillboard,
    {
        onSuccess: (data: unknown) => {
            console.log("data", data)
            toast.success("Business added to billboard")
            setIsOpen("");
        },
        showErrorMessage: true,
        requireAuth: true,
        id
    })

    return (
        <Layout>
          {(isLoading || approveBussinessMutation?.isLoading) && <Loader />}
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl mb-4">{business?.name}</h1>
            {/* <h1 className="text-xl">Owner's Name - {business?.userId}</h1> */}
            <div className="flex flex-col gap-6 md:flex-row">
                <img src={business?.profileImg?.replace("mediatoken", "media&token")} alt="profile image" className="flex-1 w-full max-h-48" />
                <img src={business?.coverImg?.replace("mediatoken", "media&token")} alt="cover image" className="flex-1 w-full max-h-48" />
            </div>
            <div className="flex flex-col flex-wrap gap-4 mt-4 md:flex-row">
              <Button onClick={() => approveBussinessMutation?.mutate({ type: 'approve' })} className="p-3 px-6 h-fit">
                Approve
              </Button>
              {
                !decline ?
                  <Button onClick={() => setDecline(true)} variant="danger" className="p-2 h-fit">
                    Decline
                  </Button>
                  :
                <div className="flex flex-col gap-2 lg:w-1/2">
                  <input type="text" placeholder="input reason for decline" value={remarks} className="w-full max-w-lg p-3 text-sm rounded-md outline-none" onChange={(e) => setRemarks(e.target.value)} />
                  <Button onClick={() => approveBussinessMutation?.mutate({ type: 'decline' })} variant="danger" className="p-2">
                  Submit
                </Button>
                </div>
              }
            </div>
            {
              business?.registrationStatus == BusinessRegistrationState.APPROVED &&
                <Button onClick={() => makeWeekBussinessMutation?.mutate({ id })} className="p-3 px-6 mt-3 h-fit">
                  Business of the week
                </Button>
            }
            {
              business?.registrationStatus == BusinessRegistrationState.APPROVED &&
                <Button onClick={() => setIsOpen(id)} className="p-3 px-6 mt-3 h-fit">
                  Add To Billboard
                </Button>
            }
            {
              business?.registrationStatus == BusinessRegistrationState.APPROVED &&
                <Link to={`/businesses/${business.id}/add-product`} className="p-3 px-6 mt-3 cursor-pointer whitespace-nowrap text-primary underline">
                  Add Black Friday Product
                </Link>
            }
          </div>
          <BillboardModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            confirm={(data) => addToBillboardMutation?.mutate({ ...data, businessId: id })}
          />
        </Layout>
    )
}

export default Business
