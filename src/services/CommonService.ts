import { IActivateAdmin, IAddAdmin, IAddAdvert, IAddCategory, IAddSubCategory, IAddSubscription, IBulkSMS, IBusiness, IDisapproveBusiness, IMutateQuery, IPlan, IQuery } from "src/interfaces"
import BaseService from "./BaseService"
import Auth from "src/utils/Auth"

const token = JSON.parse(sessionStorage.getItem("user") || `{}`)?.verify_string
const servicePrefix = "/admin/business"


// export const apiAdminGetBusinesses =  (query: IQuery) => {
//     // console.log({ query })
//     return BaseService.get("/fetch_all_businesses_api" + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
// }

export const apiAdminGetBlogs =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get(`/blogs?page=${query?.page || '1'}&limit=${query?.num_per_page || '40'}&search=${query.search || ''}`, Auth({ token: query.token}))
}

export const apiAdminGetBusinesses =  (query: IQuery & { type: string }) => {
    console.log({ query })
    return BaseService.get(`${servicePrefix}?page=${query?.page || '1'}&limit=${query?.num_per_page || '40'}&search=${query.search || ''}&type=${query.type || ''}`, Auth({ token: query.token}))
}

/* Add Job */
export const apiSendBulkSMS = (data: IBulkSMS) => {
    return BaseService.post(`/send_bulk_sms_api`, data)
}

export const apiAdminGetBilllboards =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("/fetch_all_billboard_applications" + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}

export const apiAdminGetAdverts =  () => {
    // console.log({ query })
    return BaseService.get("/fetch_all_advert_payment_types_api")
}

export const apiAdminGetSubscriptions =  () => {
    // console.log({ query })
    return BaseService.get("/fetch_all_business_subscriptions_api")
}

export const apiAdminGetSubCategories =  () => {
    // console.log({ query })
    return BaseService.get("/fetch_all_categories_api")
}

export const apiAdminGetCategories =  () => {
    // console.log({ query })
    return BaseService.get("/fetch_all_sections_api")
}

export const apiAdminGetAllCategories =  () => {
    // console.log({ query })
    return BaseService.get("/fetch_all_categories_api")
}

export const apiAdminGetSubCategoriesByCategoryString =  (id: string) => {
    // console.log({ query })
    return BaseService.get("/fetch_categories_by_section_string_api" + `/?section_string=${id}`)
}
export const apiAdminGetPlansBySubscriptionString =  (id: string) => {
    // console.log({ query })
    return BaseService.get("/fetch_subscription_plans_api" + `/?string=${id}`)
}

export const apiAdminGetCategoryString =  (id: string) => {
    // console.log({ query })
    return BaseService.get("/fetch_section_by_string_api" + `/?string=${id}`)
}

export const apiAdminGetSubscriptionByString =  (id: string) => {
    // console.log({ query })
    return BaseService.get("/fetch_business_subscription_by_string_api" + `/?string=${id}`)
}

export const apiAdminGetAdmins =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("/fetch_admins_api" + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}

export const apiAdminGetPendingBusinesses =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("fetch_pending_businesses_api" + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}

export const apiAdminGetIncompleteBusinesses =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("fetch_incomplete_businesses_api" + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}

export const apiAdminGetPendingBillboards =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("fetch_pending_billboard_applications_api" + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}

export const apiAdminGetOneBusinesses =  ({ id, token }: { id: string; token: string }) => {
    return BaseService.get(`/business/${id}`, Auth({ token: token}))
}

export const apiAdminGetBusinessCategories =  (id: string) => {
    return BaseService.get("fetch_business_categories_api" + `/?string=${id}`)
}

export const apiAdminDeleteBusinessCategory =  (id: string) => {
    return BaseService.get("delete_business_category_api" + `/?string=${id}`)
}

/* Edit business */
export const apiEditBusiness = (data: Partial<IBusiness>, { token, id }: IMutateQuery) => {
    return BaseService.patch(`${servicePrefix}/${id}`, data, Auth({ token}))
}

export const apiAdminGetOneBillboard =  (id: string) => {
    // console.log({ query })
    return BaseService.get("fetch_billboard_application_by_string_api" + `/?string=${id}`)
}

export const apiAdminGetOneAdmin =  (id: string) => {
    // console.log({ query })
    return BaseService.get("fetch_admin_by_string_api" + `/?string=${id}`)
}
export const apiAdminGetOneAdvert =  (id: string) => {
    // console.log({ query })
    return BaseService.get("fetch_advert_payment_type_by_string_api" + `/?string=${id}`)
}

export const apiAdminApproveBusinesses =  ({ type }: { type: 'approve' | 'decline' }, { id, token }: IMutateQuery) => {
    // console.log({ query })
    return BaseService.post(`${servicePrefix}/${id}/${type}`, {}, Auth({ token}))
}

export const apiAdminAddBusinessesOfTheWeek =  (id: string) => {
    // console.log({ query })
    return BaseService.get("add_business_of_the_week_api" + `/?string=${id}`)
}


export const apiAdminDispproveBusinesses =  (data: IDisapproveBusiness) => {
    // console.log({ query })
    return BaseService.post("disapprove_business_api", data)
}

export const apiAdminDeleteBusiness =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_business_api" + `/?string=${id}`, { verify_string: id })
}
export const apiAdminDeleteAdvert =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_advert_payment_type_api" + `/?string=${id}`, { verify_string: id })
}

export const apiAdminDeleteSubscription =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_business_subscription_api" + `/?string=${id}`, { verify_string: id })
}

// section == category
// category == subcategory
export const apiAdminDeleteCategory =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_section_api" + `/?string=${id}`, { verify_string: id })
}

export const apiAdminDeleteSubCategory =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_category_api" + `/?string=${id}`, { verify_string: id })
}

export const apiAdminDeletePaymentPlan =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_payment_plan_api" + `/?string=${id}`, { verify_string: id })
}

export const apiAdminGetBlog =  (id: string) => {
    return BaseService.get(`/fetch_one_blog_post_api.php?string=${id}`)
}

/* Add Admin */
export const apiAddAdmin = (data: IAddAdmin) => {
    return BaseService.post(`/add_admin_api`, data)
}

export const apiAddAdvert = (data: IAddAdvert) => {
    return BaseService.post(`/add_advert_payment_type_api`, data)
}

export const apiAddSubscription = (data: IAddSubscription) => {
    return BaseService.post(`/add_business_subscription_api`, data)
}
export const apiAddCategory = (data: IAddCategory) => {
    return BaseService.post(`/add_section_api`, data)
}

// section == category
// category == subcategory
export const apiAddSubCategory = (data: IAddSubCategory) => {
    return BaseService.post(`/add_category_api`, data)
}

export const apiAddPlan = (data: IPlan) => {
    return BaseService.post(`/add_payment_plan_api`, data)
}

export const apiActivateAdmin = (data: IActivateAdmin) => {
    return BaseService.post(`/activate_admin_account_api`, data)
}
