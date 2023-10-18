import React from 'react'
import { toast } from 'react-toastify'
import SideNav from 'src/components/SideNav'
import BottomNav from 'src/components/BottomNav'
import Head from 'src/components/Head'
import { useAuthContext } from 'src/hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import AuthHOC from 'src/components/AuthHOC'

const AdminLayout = ({ children }: { children: React.ReactNode }) => { 
  const { user } = useAuthContext()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!user?.id) {
      toast.error('You are not authorized to view this page')
      return navigate("/dashboard")
    }
  }, [user, navigate])

  if (user?.id) {
      return (
        <div className='flex w-full h-screen overflow-hidden'>
          <SideNav />
          <div className="relative flex-1 pb-10 overflow-hidden overflow-y-auto bg-black/5">
            <Head />
            {children}
          </div>
          <BottomNav />
        </div>
    )
  } else {
    return (
      <div className='flex items-center justify-center w-full h-screen overflow-hidden'>
        <h1 className='text-2xl font-semibold'>You are not authorized to view this page</h1>
      </div>
    )
  }
  
}

export default AuthHOC(AdminLayout)