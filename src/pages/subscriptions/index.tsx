import { useAuthContext } from "src/hooks/useAuthContext"
import Layout from 'src/layout'
import { Link } from "react-router-dom"
import Button from "src/components/Button"


const Subscriptions = () => {
    const { user } = useAuthContext()
  
    return (
        <Layout>
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Subscriptions Layout</h1>
            <div className="flex flex-wrap gap-4 mt-6">
              {/* <Button className="p-2">
                <Link to={"/adverts/pending"}>View All adverts</Link>
              </Button> */}
              <Button className="p-2">
                <Link to={"/subscriptions/all"}>View all Subscriptions</Link>
              </Button>
              <Button className="p-2">
                <Link to={"/subscriptions/add"}>Add Subscription</Link>
              </Button>
            </div>
          </div>
        </Layout>
    )
}

export default Subscriptions
