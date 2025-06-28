import { IDelete, IPaginatedQuery, IAddBlog, IMutateQuery } from "src/interfaces"
import BaseService from "./BaseService"
import Auth from "src/utils/Auth"

const servicePrefix = "/blogs"

const token = JSON.parse(sessionStorage.getItem("user") || `{}`)?.verify_string

console.log({token})

/* Get b */
export const apiGetAllBlogsAdmin = (query: IPaginatedQuery) => {
    return BaseService.get(`${servicePrefix}?limit=${query?.num_per_page || 40}&page=${query?.page || 1}`, Auth({ token: query.token }))
}


/* Add Blog */
export const apiAdminAddBlog = (data: IAddBlog, { token }: IMutateQuery) => {
    return BaseService.post(`${servicePrefix}`, data, Auth({ token }))
}

/* Add Blog */
export const apiAdminUpdateBlog = (data: Partial<IAddBlog>, { id, token }: IDelete) => {
    return BaseService.patch(`${servicePrefix}/${id}`, data,  Auth({ token }))
}

/* Delete Blog */
export const apiDeleteBlog = (data: { id: string }, { id, token }: IDelete) => {
    return BaseService.delete(`${servicePrefix}/${data.id || id}`,  Auth({ token }))
}



