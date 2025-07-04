import { IActivateAdmin, IAddAdmin, IAddAdvert, IAddCategory, IAddSubCategory, IAddSubscription, IBulkSMS, IBusiness, IDisapproveBusiness, IMutateQuery, IPlan, IQuery, ISubPlan } from "src/interfaces"
import BaseService from "./BaseService"
import Auth from "src/utils/Auth"

// const token = JSON.parse(sessionStorage.getItem("user") || `{}`)?.id
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

/* Add Admin */
export const apiAddAdmin = (data: IAddAdmin, query: IMutateQuery) => {
    return BaseService.post(`/auth/admin-register`, data, Auth({ token: query.token}))
}

export const apiAdminGetAdmins =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("/users/admin" + `?page=${query?.page || 1}&limit=${query?.num_per_page || 20}`, Auth({ token: query.token}))
}


/* Subscription */
export const apiAdminGetSubscriptions = (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("/plans", Auth({ token: query.token}))
}

export const apiAdminGetSubPlans = (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("/subplans", Auth({ token: query.token}))
}

export const apiAddSubscription = (data: IAddSubscription, query: IMutateQuery) => {
    return BaseService.post(`/plans`, data, Auth({ token: query.token}))
}

export const apiAdminGetSubscriptionSubPlans =  (id: string) => {
    // console.log({ query })
    return BaseService.get("/plans" + `/?string=${id}`)
}

export const apiAddSubPlan = (data: ISubPlan, query: IMutateQuery) => {
    return BaseService.post(`/subplans`, data, Auth({ token: query.token}))
}


export const apiAdminDeleteAdmin = (data: { id: string }, query: IMutateQuery) => {
    // console.log({ query })
    return BaseService.delete(`/users/admin/${query.id}`, Auth({ token: query.token,}))
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


export const apiAdminGetCategoryString =  (id: string) => {
    // console.log({ query })
    return BaseService.get("/fetch_section_by_string_api" + `/?string=${id}`)
}

export const apiAdminGetSubscriptionByString =  (id: string) => {
    // console.log({ query })
    return BaseService.get("/fetch_business_subscription_by_string_api" + `/?string=${id}`)
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

export const apiAdminDeleteAdvert =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_advert_payment_type_api" + `/?string=${id}`)
}

export const apiAdminDeleteSubscription =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_business_subscription_api" + `/?string=${id}`)
}

// section == category
// category == subcategory
export const apiAdminDeleteCategory =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_section_api" + `/?string=${id}`)
}

export const apiAdminDeleteSubCategory =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_category_api" + `/?string=${id}`)
}

export const apiAdminDeletePaymentPlan =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_payment_plan_api" + `/?string=${id}`)
}


export const apiAdminDeleteBusiness =  (id: string) => {
    // console.log({ query })
    return BaseService.delete("users/admin/${id}" + `/?string=${id}`)
}

export const apiAddAdvert = (data: IAddAdvert) => {
    return BaseService.post(`/add_advert_payment_type_api`, data)
}


export const apiAddCategory = (data: IAddCategory) => {
    return BaseService.post(`/add_section_api`, data)
}

// section == category
// category == subcategory
export const apiAddSubCategory = (data: IAddSubCategory) => {
    return BaseService.post(`/add_category_api`, data)
}



export const apiActivateAdmin = (data: IActivateAdmin) => {
    return BaseService.post(`/activate_admin_account_api`, data)
}
