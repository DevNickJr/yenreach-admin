import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'


const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const { user } = useAuthContext()

  const navigate = useNavigate()

  React.useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoutes