import React from "react";
import { useAuthContext } from "src/hooks/useAuthContext";

// import Loader from "../Loader";

export default function AuthHOC(
  ProtectedComponent: React.FC<any>,
) {
  //
  return function AuthComp(props: any) {

    const { user } = useAuthContext()


    if (!user?.id) {
      return (
        <div className='flex items-center justify-center w-screen h-screen'>
         Loading
        </div>
      );
    }

    if (!user.id) {
      return null;
    }

    return <ProtectedComponent user={user} {...props} />;
  };
}