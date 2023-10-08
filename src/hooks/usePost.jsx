import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';

const usePost = ({ api, success, failure, showSuccessMessage=true, showErrorMessage=true, ...rest }) => {

    const Mutation = useMutation({
        mutationFn: async (data) => {
          const response =  await api(data)
          // console.log("response from usePost", response)
          if (response?.data?.status === "success") {
            return response?.data?.data
          } else {
            throw new Error(response?.data?.message)
            }
        },
        onSuccess: (data, variables, context) => {
            // console.log("success", data)
            if (showSuccessMessage) {
              // toast.success(data?.message);
              toast.success("Successful !");
            }
            if (success) {
                success(data, variables, context)
            }
        },
        onError: (error, variables, context) => {
            // console.log("error", error)
            if (showErrorMessage) {
              toast.error(error?.message || "An Error Occurred!");
            } else {
              // toast.error("An Error Occurred!");
            }
            if (failure) {
                failure(error, variables, context)
            }
        },
        ...rest
      })

    return Mutation
}

export default usePost