import { useAuthContext } from "src/hooks/useAuthContext"
import Layout from 'src/layout'
import { Link } from "react-router-dom"
import Button from "src/components/Button"


const Adverts = () => {
    const { user } = useAuthContext()
  
    return (
        <Layout>
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Adverts Layout</h1>
            <div className="flex flex-wrap gap-4 mt-6">
              {/* <Button className="p-2">
                <Link to={"/adverts/pending"}>View All adverts</Link>
              </Button> */}
              <Button className="p-2">
                <Link to={"/adverts/all"}>View all Adverts Payment Type</Link>
              </Button>
              <Button className="p-2">
                <Link to={"/adverts/add"}>Add Advert Payment Type</Link>
              </Button>
            </div>
            {/* <Button className="p-2">
              <Link to={"/adverts/add"}>Add Business</Link>
            </Button> */}
            {/* <div className="mt-12">
            {
                (adverts?.length && adverts?.length > 0) ?
                      <DataTable 
                          title="adverts"
                          columns={columns} 
                          data={adverts || []} 
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
                          desc='Add bussinesses to your dashboard and start to see adverts here.' 
                          buttonText='Add Business'
                          onClick={() => ""}
                      />
              }
            </div> */}
          </div>
        </Layout>
    )
}

export default Adverts
