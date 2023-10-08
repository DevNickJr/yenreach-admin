import ApiAdapter from "./ApiService"

const servicePrefix = "/jobs"
const serviceSuffix = ".php"

const token = JSON.parse(sessionStorage.getItem("user"))?.verify_string


/* Get user */
export const apiGetUser = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_user_by_string_api${serviceSuffix}?string=${token}`,
        method: "get"    
    })
}


/* Add Job */
export const apiAddJob = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/add_job_api${serviceSuffix}`,
        method: "post",
        data    
    })
}


/* Get Jobs */
export const apiGetAllJobs = (query) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_active_job_api${serviceSuffix}?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}&search=${query?.search || ''}`,
        method: "get",  
    })
}

/* Get Jobs */
export const apiGetAllJobsAdmin = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_all_job_api${serviceSuffix}`,
        method: "get",  
    })
}

/* Get Jobs by business */
export const apiGetAllBusinessJobs = (business_string) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_job_by_business_api${serviceSuffix}?string=${business_string}`,
        method: "get",  
    })
}

/* Get One Job */
export const apiGetJob = (job_string) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_one_job_api${serviceSuffix}?string=${job_string}`,
        method: "get",  
    })
}

/* Get One Application */
export const apiGetApplication = (application_string) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_one_application_api${serviceSuffix}?string=${application_string}`,
        method: "get",  
    })
}

/* Get All Applications by Job string */
export const apiGetApplicationsByJob = (job_string) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_application_by_job_api${serviceSuffix}?string=${job_string}`,
        method: "get",  
    })
}

/* Get All Applications by User string */
export const apiGetApplicationsByUser = (user_string) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_application_by_user_api${serviceSuffix}?string=${user_string}`,
        method: "get",  
    })
}

/* Delete Application */
export const apiDeleteApplication = ({application_string, job_string }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/delete_application_api${serviceSuffix}?application_string=${application_string}&job_string=${job_string}`,
        method: "delete",
        data    
    })
}

/* Delete Job */
export const apiDeleteJob = ({business_string, job_string }) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/delete_job_api${serviceSuffix}?job_string=${job_string}&business_string=${business_string}`,
        method: "get",
    })
}



/* Submit Job Application */
export const apiSubmitApplication = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/submit_job_application_api${serviceSuffix}`,
        method: "post",
        data
    })
}
/* Update Job */
export const apiUpdateJob = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/update_job_api${serviceSuffix}`,
        method: "post",
        data
    })
}

/* Update Job status */
export const apiUpdateJobStatus = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/update_job_status_api${serviceSuffix}`,
        method: "post",
        data
    })
}



