import { useAuthContext } from "src/hooks/useAuthContext"
import Layout from 'src/layout'
import { Link } from "react-router-dom"
import Button from "src/components/Button"


const SubCategories = () => {
    const { user } = useAuthContext()
  
    return (
        <Layout>
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Categories Layout</h1>
            <div className="flex flex-wrap gap-4 mt-6">
              {/* <Button className="p-2">
                <Link to={"/Categories/pending"}>View All Categories</Link>
              </Button> */}
              <Button className="p-2">
                <Link to={"/Categories/all"}>View all Categories</Link>
              </Button>
              <Button className="p-2">
                <Link to={"/Categories/add"}>Add Categories</Link>
              </Button>
            </div>
            {/* <Button className="p-2">
              <Link to={"/Categories/add"}>Add Business</Link>
            </Button> */}
            {/* <div className="mt-12">
            {
                (Categories?.length && Categories?.length > 0) ?
                      <DataTable 
                          title="Categories"
                          columns={columns} 
                          data={Categories || []} 
                          // onPaginationChange={onPaginationChange}
                          // pageCount={Math.floor(Number(Categories?.length || 0)/pagination.pageSize)}
                          // pagination={pagination}
                          // onSortingChange={onSortingChange}
                          // sorting={sorting}
                      />
                                  :
                      <NoResult
                          isLoading={isLoading}
                          image={""}
                          desc='Add bussinesses to your dashboard and start to see Categories here.' 
                          buttonText='Add Business'
                          onClick={() => ""}
                      />
              }
            </div> */}
          </div>
        </Layout>
    )
}

export default SubCategories
