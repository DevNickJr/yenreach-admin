import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "src/hooks/useAuthContext";

// import Loader from "../Loader";

export default function AuthHOC(
  ProtectedComponent: React.FC<any>,
) {
  //
  return function AuthComp(props: any) {

    const { isLoggedIn, user } = useAuthContext()


    if (!isLoggedIn) {
      // return 
      return (
        <div className='flex flex-col gap-4 items-center justify-center w-screen h-screen'>
          You are not Logged In
          <Link to='/' className="py-2.5 px-8 text-sm flex items-center gap-2 bg-primary rounded-md text-white">Login</Link>
        </div>
      );
    }

    return <ProtectedComponent user={user} {...props} />;
  };
}