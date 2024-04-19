import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useAuthContext } from 'src/hooks/useAuthContext'
import getData from 'src/utils/getData'


interface IProps<T> {
    api: (a?: any, b?: any) =>  Promise<AxiosResponse<T, any>>
    param?: any
    key: string[]
    onSuccess?: (a: any) => void
    requireAuth?: boolean
    select?: (a: any) => T,
    enabled?: boolean
}

const useFetch = <T,>({ api, param, key, onSuccess, requireAuth, select, enabled, ...rest }: IProps<T>) => {
    const context = useAuthContext()
    const token = context?.token
    


    const { data, error, isLoading, isSuccess, isFetching, remove, refetch, fetchStatus } = useQuery({
        queryKey: [...key],
        enabled: typeof enabled === 'undefined' ? true : !!enabled,
        queryFn: () => requireAuth ? getData(api, param, token!) : getData(api, param),
        // queryFn: () => getData(api, param),
        // queryFn: () => requireAuth ? api(session?.user?.token.access, param) : api(param),
        select: select || ((d: any): T => d?.data),
        ...rest
    })

    useEffect(() => {
        if (onSuccess && isSuccess && data) {
            // console.log("data", data, "onSuccess", onSuccess, "isSuccess", isSuccess)
            onSuccess(data)
        }
    }, [data, isSuccess, onSuccess])

    return { data, error, isLoading, isFetching, remove, refetch, fetchStatus }
}

export default useFetch