import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { AxiosResponse } from "axios";
import { useAuthContext } from 'src/hooks/useAuthContext'


interface State {
  onSuccess?: (data: unknown, variables?: unknown, context?: unknown) => void;
  onError?: (error: unknown, variables?: unknown, context?: unknown) => void;
  showSuccessMessage?: boolean;
  showErrorMessage?: boolean;
  requireAuth?: boolean;
  id?: string;
}

const useMutations = <T,K>(api: (data: T, { id, token, ...rest } : { id: string, token: string }) => Promise<AxiosResponse>, { onSuccess, onError, showSuccessMessage=false, showErrorMessage=false, id, ...rest }: State) => {
    // const { data: session } = useSession()
    const context = useAuthContext()
    const token = context?.token || ""
    

    const Mutation = useMutation<K, K, T>({
        mutationFn: async (data: T) => {
          
          // const response = requireAuth ? await api(data, session?.user?.token.access) : await api(data)
          const response =  await api(data, { id: id!, token })
          // console.log("response from usePost", response)

          if (response?.data?.status === "success") {
            return response?.data?.data
          } else {
            throw new Error(response?.data?.message)
          }

          // if (response?.data?.status === "success") {
          //   return response?.data?.data
          // } else {
          //   throw new Error(response?.data?.message)
          //   }
        },
        onSuccess: (data, variables, context) => {
            // console.log("successful", data)
            if (showSuccessMessage) {
              // toast.success(data?.message);
              toast.success("Successful !");
            }
            if (onSuccess) {
              // console.log("onSuccess", onSuccess)
                onSuccess(data, variables, context)
            }
        },
        onError: (error: any, variables, context) => {
            console.log("error", error)
            if (showErrorMessage) {
              // toast.error(error?.response?.data?.message || "An Error Occurred!");
              toast.error(error?.message || "An Error Occurred!");

            }
            if (onError) {
                onError(error, variables, context)
            }
        },
        ...rest
      })

    return Mutation
}

export default useMutations