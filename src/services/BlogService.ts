import { IDelete, IPaginatedQuery, IAddBlog } from "src/interfaces"
import BaseService from "./BaseService"

const servicePrefix = ""
const serviceSuffix = ".php"

const token = JSON.parse(sessionStorage.getItem("user") || `{}`)?.verify_string

console.log({token})

/* Get b */
export const apiGetAllBlogsAdmin = (query: IPaginatedQuery) => {
    return BaseService.get(`${servicePrefix}/fetch_all_blog_api${serviceSuffix}?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}


/* Add Blog */
export const apiAdminAddBlog = (data: IAddBlog) => {
    return BaseService.post(`${servicePrefix}/add_blog_post_api${serviceSuffix}`, data)
}

/* Add Blog */
export const apiAdminUpdateBlog = (data: IAddBlog) => {
    return BaseService.post(`${servicePrefix}/update_blog_post_api${serviceSuffix}`, data)
}

/* Delete Blog */
export const apiDeleteBlog = ({id, }: IDelete) => {
    return BaseService.delete(`${servicePrefix}/delete_blog_post_api${serviceSuffix}?blog_string=${id}=$}`)
}



