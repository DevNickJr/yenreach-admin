import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "src/hooks/useAuthContext";

// import Loader from "../Loader";

export default function AuthHOC(
  ProtectedComponent: React.FC<any>,
) {
  //
  return function AuthComp(props: any) {
    const navigate = useNavigate()

    const { isLoggedIn, user } = useAuthContext()


    if (!isLoggedIn) {
      return navigate('/')
      // return (
      //   <div className='flex items-center justify-center w-screen h-screen'>
      //    Loading
      //   </div>
      // );
    }

    return <ProtectedComponent user={user} {...props} />;
  };
}