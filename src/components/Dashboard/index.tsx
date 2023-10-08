import { ReactNode } from 'react'
import ProtectedRoutes from '../ProtectedRoutes'
// import SideNav from '../../users/SideNav'

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <ProtectedRoutes>
      <div className='flex w-full h-screen overflow-hidden bg-footer-bg'>
        {/* <SideNav id={id} /> */}
        {children}
      </div>
    </ProtectedRoutes>
  )
}

export default Dashboard