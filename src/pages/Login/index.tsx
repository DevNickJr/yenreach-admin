import React, { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom'
// import { useAuthContext } from '@/hooks/useAuthContext'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { IUserLogin } from 'src/interfaces';
import { apiLogin } from 'src/services/AuthService';
import useMutations from 'src/hooks/useMutation';
import { toast } from 'react-toastify'
import { useAuthContext } from 'src/hooks/useAuthContext';
// import Button from '@/components/ui/Button';
// import Header from '@/components/Header';
// import useAuth from '@/hooks/useAuth';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const context = useAuthContext()
  const navigate = useNavigate()



  
const loginMutation = useMutations<IUserLogin, any>(
  apiLogin,
  {
    onSuccess: (data) => {
        console.log("data", data)

  
        context.dispatch({ type: "LOGIN", payload: {
          ...data
        }})
        
        toast.success("Logged in Successfully.")
        return navigate('/home')
    },
    showErrorMessage: true,
  }
)

const handleLoginMutation = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault()
  loginMutation.mutate({
    username,
    password
  })
}

  // const { user } = useAuthContext()
  
  // const { auth, isLoading, messageState } = useAuth({from: location?.state?.from});

  // console.log("location login", location)

  // if (user) {
  //   return <Navigate to={{ pathname: '/users', state: { from: location } }} />
  // }


  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center w-full h-screen px-6 gap-14 xs:px-8">
      <div className='flex flex-col items-center justify-center w-full max-w-lg gap-4 md:pt-8'>
        <h1 className="mb-8 text-2xl font-bold text-green">
          Login
        </h1>
        <form className='relative flex flex-col w-full gap-10' action="" onSubmit={handleLoginMutation}>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-medium text-black/80' htmlFor="name">Full Name / Email Address</label>
            <input required onChange={(event) => setUsername(event.target.value)} className='border-2 p-2 border-[#BABFC5] bg-[#f5f5f791] rounded-md' type="text" name='name' id='name' />
          </div>
          <div className="flex flex-col gap-1">
            <label className='text-sm font-medium text-black/80'htmlFor="name">Password</label>
            <div className="relative w-full">
              <input required onChange={(event) => setPassword(event.target.value)} className='border-2 p-2 w-full border-[#BABFC5] bg-[#f5f5f791] rounded-md' type={showPassword ? "text" : "password"} name='password' id='password' />
              {!showPassword? <BsEye onClick={() => setShowPassword(true)} className='absolute top-0 bottom-0 z-20 m-auto scale-110 cursor-pointer right-3' /> : <BsEyeSlash onClick={() => setShowPassword(false)} className='absolute top-0 bottom-0 z-20 m-auto scale-110 cursor-pointer right-3' />}
            </div>
            <Link to='/password-recovery' className='text-[#FF6B93] text-xs ml-auto'>Forgot Password?</Link>
          </div>
          
          <button className='p-3 font-semibold bg-green-400 disabled:bg-green/90' type='submit' disabled={loginMutation.isLoading}>
            {loginMutation.isLoading ? "Loading..." : "Login to my account" }
          </button>
          {/* <div className='absolute left-0 flex justify-center w-full -bottom-8'>
            {messageState && <p className='text-[#FF6B93] text-sm'>{messageState}</p>}
          </div> */}
        </form>
        <p className='mt-8 text-sm font-semibold'>Don't have an account? <Link to='/signup' className='text-[#5441ff]'>Sign Up</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login  