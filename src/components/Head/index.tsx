import { RxCaretDown } from 'react-icons/rx'
import { useAuthContext } from 'src/hooks/useAuthContext'

const AdminHead = () => {
  const { user } = useAuthContext()


  return (
    <div className='sticky top-0 left-0 right-0 z-30 flex items-center justify-between gap-4 p-4 text-black bg-white shadow overflow-visibl sm:py-4 md:px-6'>
        {/* <input type="text" placeholder='Search' className='border border-gray-300 rounded-full px-4 min-w-[100px] md:w-96' /> */}
        <h1 className='font-semibold text-primary'>Dashboard</h1>
        <div className='flex items-center justify-between gap-2'>
          {/* <div className="w-4 h-4 bg-gray-200 rounded-full" /> */}
          <div className='flex items-center gap-2 text-xs'>
            <div className="w-6 h-6 rounded-full bg-primary/30" />
            <div className="flex-col hidden gap-1 md:flex">
              <div className='text-sm font-semibold'>{user?.username}</div>
              <div className='text-xs'>{user?.username}</div>
            </div>
            <div className='relative cursor-pointer group'>
              <RxCaretDown className='text-2xl text-gray-dark md:' />
              <div className='absolute right-0 flex-col hidden gap-2 bg-white shadow-md top-6 group-hover:flex'>
                {/* <Link href={`/dashboard/settings`} className='py-2 border-b-2 cursor-pointer'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                    Settings
                  </span>
                </Link> */}
                <div onClick={() => ''} className='pb-2'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                    Logout
                  </span>
                </div>
              </div>
            </div>
          
              {/* <BiMenu onClick={() => setIsOpen(true)} className='relative z-50 text-3xl cursor-pointer md:hidden text-gray-dark' /> */}
          </div>
        </div>
        {/* <Links isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </div>
  )
}

export default AdminHead