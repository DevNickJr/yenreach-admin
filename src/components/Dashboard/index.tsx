import { ReactNode } from 'react'
// import ProtectedRoutes from '../ProtectedRoutes'
import Layout from 'src/layout'
// import SideNav from '../../users/SideNav'

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <div className='flex w-full h-screen overflow-hidden bg-footer-bg'>
        {/* <SideNav id={id} /> */}
        {children}
      </div>
    </Layout>
  )
}

export default Dashboard