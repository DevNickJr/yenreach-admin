import useFetch from "src/hooks/useFetch"
import Layout from 'src/layout'
import { IAdmin } from "src/interfaces"
import { useParams } from "react-router-dom"
// import Loader from "src/components/Loader"
// import Button from "src/components/Button"
// import useMutations from "src/hooks/useMutation"
// import { toast } from "react-toastify"
import { apiAdminGetOneAdmin } from "src/services/CommonService"
import Loader from "src/components/Loader"

const Admin = () => {
    const { id } = useParams();

    const { data: admin, isLoading } = useFetch<IAdmin>({
      api: apiAdminGetOneAdmin,
      key: ["one-admin", id || ""],
      param: id,
      enabled: !!id
    })

    // const approveBussinessMutation = useMutations<string, any>(
    //     apIAdminApproveadmines,
    // {
    //     onSuccess: (data: any) => {
    //         console.log("data", data)
    //         toast.success("admin Approved Successfully")
    //     },
    //     showErrorMessage: true,
    //     requireAuth: true,
    // })

    // const dispproveBussinessMutation = useMutations<IDisapproveadmin, any>(
    //     apIAdminDispproveadmines,
    // {
    //     onSuccess: (data: any) => {
    //         console.log("data", data)
    //         toast.success("admin Declined Successfully")
    //         setRemarks("")
    //         setDecline(false)
    //     },
    //     showErrorMessage: true,
    //     requireAuth: true,
    // })


    // console.log({admin})
  
    return (
        <Layout>
            {/* {
                (isLoading || approveBussinessMutation?.isLoading || dispproveBussinessMutation?.isLoading) && <Loader />
            } */}
            {
                (isLoading) && <Loader />
            }
            {
                
            }
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Name - {admin?.name}</h1>
            <h1 className="text-xl">Level - {admin?.authorizationLevel}</h1>
            <p className="text-md">Personal Email - {admin?.personal_email}</p>
            <p className="text-md">Official Email - {admin?.official_email}</p>
            <p className="text-md">Username - {admin?.username}</p>
            <p className="text-md">Phone - {admin?.phoneNumber}</p>
            {/* <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-4">
              <Button onClick={() => approveBussinessMutation?.mutate(admin?.verify_string || "")} className="p-3 h-fit px-6">
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

export default Admin
