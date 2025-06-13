import { IDelete, IJob, IMutateQuery, IPaginatedQuery } from "src/interfaces"
import BaseService from "./BaseService"
import Auth from "src/utils/Auth"

const servicePrefix = "/jobs"
const adminPrefix = "/jobs/admin"

/* Get Jobs */
export const apiGetAllJobsAdmin = (query: IPaginatedQuery) => {
    return BaseService.get(`${servicePrefix}/all?page=${query?.page || 1}&limit=${query?.num_per_page || 40}`, Auth({ token: query.token }))
}

/* Add Job */
export const apiAdminAddJob = (data: IJob, { token }: IMutateQuery) => {
    return BaseService.post(`${adminPrefix}`, data, Auth({ token }))
}


/* Delete Job */
export const apiDeleteJob = (data: { id: string }, { id, token }: IDelete) => {
    return BaseService.delete(`${adminPrefix}/${data.id || id}`, Auth({ token }))
}
