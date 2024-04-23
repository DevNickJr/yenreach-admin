import { IDelete, IBlog, IPaginatedQuery } from "src/interfaces"
import BaseService from "./BaseService"

const servicePrefix = "/Blogs"
const serviceSuffix = ".php"

const token = JSON.parse(sessionStorage.getItem("user") || `{}`)?.verify_string

console.log({token})

/* Get Blogs */
export const apiGetAllBlogsAdmin = (query: IPaginatedQuery) => {
    return BaseService.get(`${servicePrefix}/fetch_all_Blog_api${serviceSuffix}?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}


/* Add Blog */
export const apiAdminAddBlog = (data: IBlog) => {
    return BaseService.post(`${servicePrefix}/add_Blog_admin_api${serviceSuffix}`, data)
}


/* Delete Blog */
export const apiDeleteBlog = ({id, admin_string }: IDelete) => {
    return BaseService.delete(`${servicePrefix}/delete_blog_post_api${serviceSuffix}?Blog_string=${id}&admin_string=${admin_string}`)
}



