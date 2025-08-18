import { IDelete, IProduct, IMutateQuery, IPaginatedQuery, IAddProduct } from "src/interfaces"
import BaseService from "./BaseService"
import Auth from "src/utils/Auth"

const servicePrefix = "/products"
const adminPrefix = "/products/admin"

/* Get Products */
export const apiGetAllProductsAdmin = (query: IPaginatedQuery) => {
    return BaseService.get(`${servicePrefix}/all?page=${query?.page || 1}&limit=${query?.num_per_page || 40}`, Auth({ token: query.token }))
}

export const apiGetProductCategories = (query: IPaginatedQuery) => {
    return BaseService.get(`${servicePrefix}/categories`, Auth({ token: query.token }))
}

/* Add Product */
export const apiAdminAddBlackProduct = (data: IAddProduct, { token }: IMutateQuery) => {
    return BaseService.post(`/admin/products/black-friday`, data, Auth({ token }))
}

/* Get Products */
export const apiGetBlackProducts = (query: IPaginatedQuery) => {
    return BaseService.get(`/products/black-friday/all?page=${query?.page || 1}&limit=${query?.num_per_page || 40}`, Auth({ token: query.token }))
}

/* Delete Product */
export const apiAdminDeleteBlackProduct = (data: { id: string }, { id, token }: IDelete) => {
    return BaseService.delete(`/admin/products/black-friday/${data.id || id}`, Auth({ token }))
}
/* Delete Product */
export const apiDeleteProduct = (data: { id: string }, { id, token }: IDelete) => {
    return BaseService.delete(`${adminPrefix}/${data.id || id}`, Auth({ token }))
}
