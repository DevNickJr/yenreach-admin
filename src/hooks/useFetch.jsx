import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'


const useFetch = ({ api, param, key, onSuccess, select, ...rest }) => {

    const { data, error, isLoading, isSuccess, isFetching, remove, refetch, fetchStatus } = useQuery({
        queryKey: [...key],
        queryFn: () => getData(api, param),
        select: select || ((data) => data?.data),
        ...rest
    })

    // useEffect(() => {
    //     return () => {
    //       if (clear) remove()
    //     }
    // }, [clear])

    useEffect(() => {
        if (onSuccess && isSuccess && data) {
            // console.log("data", data, "onSuccess", onSuccess, "isSuccess", isSuccess)
            onSuccess(data)
        }
    }, [data])

    return { data, error, isLoading, isFetching, remove, refetch, fetchStatus }
}

export default useFetch