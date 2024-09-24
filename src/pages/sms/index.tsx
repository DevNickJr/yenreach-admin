import { useAuthContext } from "src/hooks/useAuthContext"
import Layout from 'src/layout'
import { Link } from "react-router-dom"
import Button from "src/components/Button"


const SMS = () => {
    const { user } = useAuthContext()
  
    return (
        <Layout>
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your SMS Layout</h1>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button className="p-2">
                <Link to={"/sms/bulk"}>Send Bulk SMS</Link>
              </Button>
              {/* <Button className="p-2">
                <Link to={"/sms/all"}>View all sms</Link>
              </Button> */}
            </div>
          </div>
        </Layout>
    )
}

export default SMS
