import Dashboard from "src/components/Dashboard"
import { useAuthContext } from "src/hooks/useAuthContext"

const Home = () => {

  const { user } = useAuthContext()
  
    // const { isLoading, error, data: businesses } = useFetch({
    //     api: apiGetAllBusinesses,
    //     key: ['userBusinesses', user?.verify_string],
    //     param: user?.verify_string,
    //   })


    return (
        <Dashboard>
          <div className="flex flex-col gap-1 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Yenreach Admin Dashboar</h1>
          </div>
        </Dashboard>
    )
}

export default Home



// old business card
//     <Link to={`/users/business/${business.verify_string}`} key={business?.verify_string} className='bg-[#F1F1F1] rounded-xl overflow-hidden'>
//         <div>
//             <img src={Business} alt="" className="object-cover w-full h-40" />
//             <div className='p-4 px-6'>
//                 <p className='mb-1 font-semibold'>{business.name}</p>
//                 <div className='flex gap-2 items-center text-[#777777] text-xsm'>
//                     <span>20-10-2022</span>
//                     <img src={Elipse} alt=""  />
//                     <span>234 visits</span>
//                 </div>
//             </div>
//         </div>