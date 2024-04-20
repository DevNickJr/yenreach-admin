import { IJob } from "src/interfaces"
import BaseService from "./BaseService"

const servicePrefix = "/jobs"
const serviceSuffix = ".php"

const token = JSON.parse(sessionStorage.getItem("user") || `{}`)?.verify_string

console.log({token})

/* Get Jobs */
export const apiGetAllJobsAdmin = () => {
    return BaseService.get(`${servicePrefix}/fetch_all_job_api${serviceSuffix}`)
}

/* Add Job */
export const apiAddJob = (data: IJob) => {
    return  BaseService.post(`${servicePrefix}/add_job_api${serviceSuffix}`, data)
}






// Previous Data -------------------------------------------------------------------------------
// Previous Data -------------------------------------------------------------------------------
// Previous Data -------------------------------------------------------------------------------
// Previous Data -------------------------------------------------------------------------------


/* Get user */
// export const apiGetUser = () => {
//     return ApiAdapter.fetchData({
//         url: `${servicePrefix}/fetch_user_by_string_api${serviceSuffix}?string=${token}`,
//         method: "get"    
//     })
// }


// /* Add Job */
// export const apiAddJob = (data) => {
//     return ApiAdapter.fetchData({
//         url: `${servicePrefix}/add_job_api${serviceSuffix}`,
//         method: "post",
//         data    
//     })
// }


// /* Get Jobs */
// export const apiGetAllJobs = (query) => {
//     return ApiAdapter.fetchData({
//         url: `${servicePrefix}/fetch_active_job_api${serviceSuffix}?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}&search=${query?.search || ''}`,
//         method: "get",  
//     })
// }



// /* Update Job */
// export const apiUpdateJob = (data) => {
//     return ApiAdapter.fetchData({
//         url: `${servicePrefix}/update_job_api${serviceSuffix}`,
//         method: "post",
//         data
//     })
// }

// /* Update Job status */
// export const apiUpdateJobStatus = (data) => {
//     return ApiAdapter.fetchData({
//         url: `${servicePrefix}/update_job_status_api${serviceSuffix}`,
//         method: "post",
//         data
//     })
// }



