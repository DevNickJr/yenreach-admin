import { MdLogout, MdBusiness, MdWorkOutline, MdPerson } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { useAuthContext } from 'src/hooks/useAuthContext';

const SideNav = () => {
    const { pathname } = useLocation();
    const { user } = useAuthContext()
    // console.log({pathname})

  return (
    <div className='no-scrollbar hidden sm:flex flex-col justify-between grad-to-bottom max-h-screen overflow-hidden h-screen min-w-[240px] w-60 pb-4 grad-to-right'>
        <div>
            <div className='flex flex-col items-center w-full gap-5 py-5 text-center border-b border-white/10'>
                <Link to={"/admin/"} className='text-xl font-semibold'>
                    {/* <Image src={Logo} className='w-full h-12 bg-white md:h-12' alt='' /> */}
                    Admin
                </Link>
            </div>
            <div className='flex flex-col gap-2 pt-12 pb-2'>
                {
                    (user?.autho_level && Number(user?.autho_level) < 2) &&
                        <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${(pathname === '/admins') && 'font-bold'}`} to="/admins">
                            <MdPerson size={"1.3rem"} />
                            Admins
                        </Link>
                }
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${(pathname?.includes("businesses")) && 'font-bold'}`} to="/businesses">
                    <MdBusiness size={"1.3rem"} />
                    Businesses
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("jobs") && 'font-bold'}`} to={"/jobs"}>
                    <MdWorkOutline size={"1.3rem"} />
                    Jobs 
                </Link>
                {/* <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("billboards") && 'font-bold'}`} to={"/billboards"}>
                    <AiOutlineBorderVerticle size={"1.3rem"} />
                    Billboards
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("blogs") && 'font-bold'}`} to={"/blogs"}>
                    <TbBrandBlogger size={"1.3rem"} />
                    Blogs 
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("adverts") && 'font-bold'}`} to={"/adverts"}>
                    <MdOutlineAirplaneTicket size={"1.3rem"} />
                    AdPayType 
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("categories") && 'font-bold'}`} to={"/categories"}>
                    <BiCategory size={"1.3rem"} />
                    Categories 
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("subscriptions") && 'font-bold'}`} to={"/subscriptions"}>
                    <MdSubscriptions size={"1.3rem"} />
                    Subscriptions 
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("sms") && 'font-bold'}`} to={"/sms"}>
                    <MdMessage size={"1.3rem"} />
                    SMS 
                </Link> */}
            </div>
        </div>
        <div className='flex flex-col gap-10 pb-2 underline'>
            <div onClick={() => ''} className={`py-2.5 pl-6 text-sm flex items-center gap-2 cursor-pointer`}>
                <MdLogout size={"1.3rem"} />
                Logout
            </div>
        </div>
    </div>
  )
}

export default SideNav