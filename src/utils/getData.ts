import { AxiosResponse } from "axios"

export default async function getData(service: (a?: any, b?: any) =>  Promise<AxiosResponse<any, any>>, params={}) {
    const response = await service(params)
    // console.log("response", response)
    if (response?.data?.status === "failed") {
        // console.log("failed_getdata: ", response.data.message)
        throw new Error(response?.data?.message)
    }
    // console.log("res", response)
    return response?.data
}
