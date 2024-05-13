import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
import { IBusiness, IDisapproveBusiness } from "src/interfaces"
import { apiAdminAddBusinessesOfTheWeek, apiAdminApproveBusinesses, apiAdminDispproveBusinesses, apiAdminGetOneBusinesses } from "src/services/CommonService"
import { useParams } from "react-router-dom"
import Loader from "src/components/Loader"
import Button from "src/components/Button"
import useMutations from "src/hooks/useMutation"
import { toast } from "react-toastify"
import { useState } from "react"

const Business = () => {
    const { id } = useParams();
    const [decline, setDecline] = useState(false)
    const [remarks, setRemarks] = useState("")

    const { data: business, isLoading } = useFetch<IBusiness>({
      api: apiAdminGetOneBusinesses,
      key: ["one-businesses", id || ""],
      param: id,
      enabled: !!id
    })

    const approveBussinessMutation = useMutations<string, any>(
        apiAdminApproveBusinesses,
    {
        onSuccess: (data: any) => {
            console.log("data", data)
            toast.success("Business Approved Successfully")
        },
        showErrorMessage: true,
        requireAuth: true,
    })

    const makeWeekBussinessMutation = useMutations<string, any>(
      apiAdminAddBusinessesOfTheWeek,
    {
        onSuccess: (data: any) => {
            console.log("data", data)
            toast.success("Business of the week set Successfully")
        },
        showErrorMessage: true,
        requireAuth: true,
    })

    const dispproveBussinessMutation = useMutations<IDisapproveBusiness, any>(
        apiAdminDispproveBusinesses,
    {
        onSuccess: (data: any) => {
            console.log("data", data)
            toast.success("Business Declined Successfully")
            setRemarks("")
            setDecline(false)
        },
        showErrorMessage: true,
        requireAuth: true,
    })


    console.log({business})
  
    return (
        <Layout>
            {
                (isLoading || approveBussinessMutation?.isLoading || dispproveBussinessMutation?.isLoading) && <Loader />
            }
            {
                
            }
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Business Name - {business?.name}</h1>
            <h1 className="text-xl">Owner's Name - {business?.owner_name}</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <img src={business?.profile_img?.replace("mediatoken", "media&token")} alt="" className="flex-1 w-full max-h-48" />
                <img src={business?.cover_img?.replace("mediatoken", "media&token")} alt="" className="flex-1 w-full max-h-48" />
            </div>
            <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-4">
              <Button onClick={() => approveBussinessMutation?.mutate(business?.verify_string || "")} className="p-3 h-fit px-6">
                Approve
              </Button>
              {
                !decline ?
                  <Button onClick={() => setDecline(true)} variant="danger" className="p-2 h-fit">
                    Decline
                  </Button>
                  :
                <div className="flex flex-col lg:w-1/2 gap-2">
                  <input type="text" placeholder="input reason for decline" value={remarks} className="text-sm outline-none rounded-md p-3 w-full max-w-lg" onChange={(e) => setRemarks(e.target.value)} />
                  <Button onClick={() => dispproveBussinessMutation?.mutate({ verify_string: id || "", remarks })} variant="danger" className="p-2">
                  Submit
                </Button>
                </div>
              }
            </div>
            {
              Number(business?.reg_stage || 0) > 3 &&
                <Button onClick={() => makeWeekBussinessMutation?.mutate(business?.verify_string || "")} className="mt-3 p-3 h-fit px-6">
                  Business of the week
                </Button>
            }
          </div>
        </Layout>
    )
}

export default Business
