import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
import { IBillboard } from "src/interfaces"
import { useParams } from "react-router-dom"
import Loader from "src/components/Loader"
import { useState } from "react"
import { apiAdminGetOneBillboard } from "src/services/CommonService"

const Billboard = () => {
    const { id } = useParams();
    const [decline, setDecline] = useState(false)

    const { data: billboard, isLoading } = useFetch<IBillboard>({
      api: apiAdminGetOneBillboard,
      key: ["one-billboard", id || ""],
      param: id,
      enabled: !!id
    })

    // const approveBussinessMutation = useMutations<string, any>(
    //     apiAdminApprovebillboardes,
    // {
    //     onSuccess: (data: any) => {
    //         console.log("data", data)
    //         toast.success("billboard Approved Successfully")
    //     },
    //     showErrorMessage: true,
    //     requireAuth: true,
    // })

    // const dispproveBussinessMutation = useMutations<IDisapprovebillboard, any>(
    //     apiAdminDispprovebillboardes,
    // {
    //     onSuccess: (data: any) => {
    //         console.log("data", data)
    //         toast.success("billboard Declined Successfully")
    //         setRemarks("")
    //         setDecline(false)
    //     },
    //     showErrorMessage: true,
    //     requireAuth: true,
    // })


    console.log({decline, setDecline})
  
    return (
        <Layout>
            {
                (isLoading) && <Loader />
            }
            {
                
            }
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Billboard Title - {billboard?.title}</h1>
            <h1 className="text-xl">Owner's Name - {billboard?.user?.user}</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <img src={billboard?.filename?.replace("mediatoken", "media&token")} alt="" className="flex-1 w-full max-h-48" />
            </div>
            {/* <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-4">
              <Button onClick={() => approveBussinessMutation?.mutate(billboard?.verify_string || "")} className="p-3 h-fit px-6">
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
            </div> */}
          </div>
        </Layout>
    )
}

export default Billboard
