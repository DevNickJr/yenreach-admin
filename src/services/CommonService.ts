import { IActivateAdmin, IAddAdmin, IAddAdvert, IAddCategory, IAddSubCategory, IAddSubscription, IBulkSMS, IBusiness, IDisapproveBusiness, IPlan, IQuery } from "src/interfaces"
import BaseService from "./BaseService"

const serviceSuffix = ".php"
const token = JSON.parse(sessionStorage.getItem("user") || `{}`)?.verify_string

// console.log({token})

/* Add Job */
export const apiSendBulkSMS = (data: IBulkSMS) => {
    return BaseService.post(`/send_bulk_sms_api${serviceSuffix}`, data)
}


export const apiAdminGetBusinesses =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("/fetch_all_businesses_api" + serviceSuffix + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}

// export const apiAdminGetBusinesses =  (query: IQuery) => {
//     // console.log({ query })
//     return BaseService.get("/fetch_public_approved_businesses_api" + serviceSuffix + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
// }

export const apiAdminGetBilllboards =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("/fetch_all_billboard_applications" + serviceSuffix + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}

export const apiAdminGetAdverts =  () => {
    // console.log({ query })
    return BaseService.get("/fetch_all_advert_payment_types_api" + serviceSuffix)
}

export const apiAdminGetSubscriptions =  () => {
    // console.log({ query })
    return BaseService.get("/fetch_all_business_subscriptions_api" + serviceSuffix)
}

export const apiAdminGetSubCategories =  () => {
    // console.log({ query })
    return BaseService.get("/fetch_all_categories_api" + serviceSuffix)
}

export const apiAdminGetCategories =  () => {
    // console.log({ query })
    return BaseService.get("/fetch_all_sections_api" + serviceSuffix)
}

export const apiAdminGetAllCategories =  () => {
    // console.log({ query })
    return BaseService.get("/fetch_all_categories_api" + serviceSuffix)
}

export const apiAdminGetSubCategoriesByCategoryString =  (id: string) => {
    // console.log({ query })
    return BaseService.get("/fetch_categories_by_section_string_api" + serviceSuffix + `/?section_string=${id}`)
}
export const apiAdminGetPlansBySubscriptionString =  (id: string) => {
    // console.log({ query })
    return BaseService.get("/fetch_subscription_plans_api" + serviceSuffix + `/?string=${id}`)
}

export const apiAdminGetCategoryString =  (id: string) => {
    // console.log({ query })
    return BaseService.get("/fetch_section_by_string_api" + serviceSuffix + `/?string=${id}`)
}

export const apiAdminGetSubscriptionByString =  (id: string) => {
    // console.log({ query })
    return BaseService.get("/fetch_business_subscription_by_string_api" + serviceSuffix + `/?string=${id}`)
}

export const apiAdminGetAdmins =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("/fetch_admins_api" + serviceSuffix + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}

export const apiAdminGetPendingBusinesses =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("fetch_pending_businesses_api" + serviceSuffix + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}

export const apiAdminGetIncompleteBusinesses =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("fetch_incomplete_businesses_api" + serviceSuffix + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}

export const apiAdminGetPendingBillboards =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("fetch_pending_billboard_applications_api" + serviceSuffix + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}

export const apiAdminGetOneBusinesses =  (id: string) => {
    // console.log({ query })
    return BaseService.get("fetch_business_by_string_api" + serviceSuffix + `/?string=${id}`)
}

export const apiAdminGetBusinessCategories =  (id: string) => {
    return BaseService.get("fetch_business_categories_api" + serviceSuffix + `/?string=${id}`)
}

export const apiAdminDeleteBusinessCategory =  (id: string) => {
    return BaseService.get("delete_business_category_api" + serviceSuffix + `/?string=${id}`)
}

/* Edit business */
export const apiEditBusiness = (data: Partial<IBusiness>) => {
    const val = {...data, user_string: data?.user_string || token}
         
    return BaseService.post("edit_business_profile_api" + serviceSuffix, val)
}

export const apiAdminGetOneBillboard =  (id: string) => {
    // console.log({ query })
    return BaseService.get("fetch_billboard_application_by_string_api" + serviceSuffix + `/?string=${id}`)
}

export const apiAdminGetOneAdmin =  (id: string) => {
    // console.log({ query })
    return BaseService.get("fetch_admin_by_string_api" + serviceSuffix + `/?string=${id}`)
}
export const apiAdminGetOneAdvert =  (id: string) => {
    // console.log({ query })
    return BaseService.get("fetch_advert_payment_type_by_string_api" + serviceSuffix + `/?string=${id}`)
}

export const apiAdminApproveBusinesses =  (id: string) => {
    // console.log({ query })
    return BaseService.get("approve_business_api" + serviceSuffix + `/?string=${id}`)
}

export const apiAdminAddBusinessesOfTheWeek =  (id: string) => {
    // console.log({ query })
    return BaseService.get("add_business_of_the_week_api" + serviceSuffix + `/?string=${id}`)
}


export const apiAdminDispproveBusinesses =  (data: IDisapproveBusiness) => {
    // console.log({ query })
    return BaseService.post("disapprove_business_api" + serviceSuffix, data)
}

export const apiAdminDeleteBusiness =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_business_api" + serviceSuffix + `/?string=${id}`, { verify_string: id })
}
export const apiAdminDeleteAdvert =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_advert_payment_type_api" + serviceSuffix + `/?string=${id}`, { verify_string: id })
}

export const apiAdminDeleteSubscription =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_business_subscription_api" + serviceSuffix + `/?string=${id}`, { verify_string: id })
}

// section == category
// category == subcategory
export const apiAdminDeleteCategory =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_section_api" + serviceSuffix + `/?string=${id}`, { verify_string: id })
}

export const apiAdminDeleteSubCategory =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_category_api" + serviceSuffix + `/?string=${id}`, { verify_string: id })
}

export const apiAdminDeletePaymentPlan =  (id: string) => {
    // console.log({ query })
    return BaseService.post("delete_payment_plan_api" + serviceSuffix + `/?string=${id}`, { verify_string: id })
}


export const apiAdminGetBlogs =  (query: IQuery) => {
    // console.log({ query })
    return BaseService.get("/fetch_all_blog_post_api" + serviceSuffix + `?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`)
}

export const apiAdminGetBlog =  (id: string) => {
    return BaseService.get(`/fetch_one_blog_post_api.php?string=${id}`)
}

// /* Delete Job */
// export const apiDeleteBlog = ({job_string, admin_string }) => {
//     return ApiAdapter.fetchData({
//         url: `${servicePrefix}/delete_job_api${serviceSuffix}?job_string=${job_string}&admin_string=${admin_string}`,
//         method: "get",
//     })
// }

/* Add Admin */
export const apiAddAdmin = (data: IAddAdmin) => {
    return BaseService.post(`/add_admin_api${serviceSuffix}`, data)
}

export const apiAddAdvert = (data: IAddAdvert) => {
    return BaseService.post(`/add_advert_payment_type_api${serviceSuffix}`, data)
}

export const apiAddSubscription = (data: IAddSubscription) => {
    return BaseService.post(`/add_business_subscription_api${serviceSuffix}`, data)
}
export const apiAddCategory = (data: IAddCategory) => {
    return BaseService.post(`/add_section_api${serviceSuffix}`, data)
}

// section == category
// category == subcategory
export const apiAddSubCategory = (data: IAddSubCategory) => {
    return BaseService.post(`/add_category_api${serviceSuffix}`, data)
}

export const apiAddPlan = (data: IPlan) => {
    return BaseService.post(`/add_payment_plan_api${serviceSuffix}`, data)
}

export const apiActivateAdmin = (data: IActivateAdmin) => {
    return BaseService.post(`/activate_admin_account_api${serviceSuffix}`, data)
}















/* Home/index */

// export const apiHomeBusiness =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_home_businesses_api" + serviceSuffix,
//         method: "get"    
//     })
// }
// // export const apiGetUsers =  () => {
// //     return ApiAdapter.fetchData({
// //         url: servicePrefix + "fetch_all_users_api" + serviceSuffix,
// //         method: "get"    
// //     })
// // }

// export const apiBusinessCategories =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_filled_categories_api" + serviceSuffix,
//         method: "get"    
//     })
// }

// export const apiBusinessOfTheWeek =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_business_of_the_week_api" + serviceSuffix,
//         method: "get"    
//     })
// }
// export const apiBusinessAnalytics =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_analytics_data_api" + serviceSuffix,
//         method: "get"    
//     })
// }

// export const apiBusinessStates =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_business_states_api" + serviceSuffix,
//         method: "get"    
//     })
// }

// export const apiBillboards =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_active_billboards_api" + serviceSuffix,
//         method: "get"    
//     })
// }

// export const apiGetFilledCategories =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_filled_categories_api" + serviceSuffix,
//         method: "get"    
//     })
// }

// export const apiGetBusinessStates =  () => {
//     // business states
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_business_states_api" + serviceSuffix,
//         method: "get"    
//     })
// }

// /* Get states */
// export const apiGetStates = () => {
//     return ApiAdapter.fetchData({
//         url: `/fetch_all_states_api${serviceSuffix}`,
//         method: "get",
//     })
// }

// /* Get lgas */
// export const apiGetLGAs = () => {
//     return ApiAdapter.fetchData({
//         url: `/fetch_all_lgas_api${serviceSuffix}`,
//         method: "get",
//     })
// }


// /* Business */
// export const apiGetOneBusiness = (business_token: string) => {
//     return ApiAdapter.fetchData({
//         url: `/fetch_business_by_string_api${serviceSuffix}?string=${business_token}`,
//         method: "get"    
//     })
// }

// export const apiGetBusinessCategories = (business_token: string) => {
//     return ApiAdapter.fetchData({
//         url: `/fetch_business_categories_api${serviceSuffix}?string=${business_token}`,
//         method: "get"    
//     })
// }

// // export const apiGetBusinessApprovedPhotos = (business_token: string) => {
// //     return ApiAdapter.fetchData({
// //         url: `/fetch_business_public_photos_api${serviceSuffix}?string=${business_token}`,
// //         method: "get"    
// //     })
// // }

// // export const apiGetBusinessApprovedVideos = (business_token: string) => {
// //     return ApiAdapter.fetchData({
// //         url: `/fetch_business_public_videolinks_api${serviceSuffix}?string=${business_token}`,
// //         method: "get"    
// //     })
// // }
// export const apiGetBusinessWorkingHours = (business_token: string) => {
//     return ApiAdapter.fetchData({
//         url: `/fetch_business_working_hours_api${serviceSuffix}?string=${business_token}`,
//         method: "get"    
//     })
// }
// export const apiGetBusinessBranches = (business_token: string) => {
//     return ApiAdapter.fetchData({
//         url: `/fetch_business_public_branches_api${serviceSuffix}?string=${business_token}`,
//         method: "get"    
//     })
// }
// export const apiGetBusinessSubscription = (business_token: string) => {
//     return ApiAdapter.fetchData({
//         url: `/fetch_business_latest_subscription_api${serviceSuffix}?string=${business_token}`,
//         method: "get"    
//     })
// }
// export const apiGetBusinessSubscriptionByString = (subscription_string: string) => {
//     return ApiAdapter.fetchData({
//         url: `/fetch_business_subscription_by_string_api${serviceSuffix}?string=${subscription_string}`,
//         method: "get"    
//     })
// }

// export const apiGetRelatedBusinesses = (business_token: string) => {
//     return ApiAdapter.fetchData({
//         url: `/fetch_related_businesses_api${serviceSuffix}?string=${business_token}`,
//         method: "get"    
//     })
// }
// export const apiGetBusinessFacilities = (business_token: string) => {
//     return ApiAdapter.fetchData({
//         url: `/fetch_business_available_facilities_api${serviceSuffix}?string=${business_token}`,
//         method: "get"    
//     })
// }
// export const apiGetBusinessReviews = (business_token: string) => {
//     return ApiAdapter.fetchData({
//         url: `/fetch_business_reviews_api${serviceSuffix}?string=${business_token}`,
//         method: "get"    
//     })
// }
// export const apiGetBusinessReviewsStats = (business_token: string) => {
//     return ApiAdapter.fetchData({
//         url: `/fetch_business_review_summary_api${serviceSuffix}?string=${business_token}`,
//         method: "get"    
//     })
// }
// export const apiAddBusinessReview = (data: any) => {
//     return ApiAdapter.fetchData({
//         url: `add_business_review_api${serviceSuffix}`,
//         method: "post",
//         data
//     })
// }

// export const apiSaveBusiness = ({buisnes_string}) => {
//     return ApiAdapter.fetchData({
//         url: `/save_business${serviceSuffix}?buisnes_string=${buisnes_string}}`,
//         method: "get",
//     })
// }

// // export const apiCheckSavedBusinesses = (business_token: string) => {
// //     return ApiAdapter.fetchData({
// //         url: `/check_saved_business_api${serviceSuffix}?user=token&business=${business_token}`,
// //         method: "get"    
// //     })
// // }

// // export const apiGetBusinessesFacilities = (facil_string) => {
// //     return ApiAdapter.fetchData({
// //         url: `/fetch_facility_by_string_api${serviceSuffix}?string=${facil_string}`,
// //         method: "get"    
// //     })
// // }

// /* Blogs */

// export const apiGetAllBlogs =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_all_blog_post_api" + serviceSuffix,
//         method: "get"    
//     })
// }

// export const apiGetBlog =  (id: string) => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_one_blog_post_api" + serviceSuffix + "?string=" + id,
//         method: "get"    
//     })
// }
// export const apiGetBlogComments =  (id: string) => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_comments_api" + serviceSuffix + "?string=" + id,
//         method: "get"    
//     })
// }

// export const apiGetComments =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_comments_api" + serviceSuffix,
//         method: "get"    
//     })
// }

// export const apiAddComment =  (data: any) => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "add_comment_api" + serviceSuffix,
//         method: "post",
//         data    
//     })
// }

// export const apiFeedback =  (data: any) => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "add_feedback_api" + serviceSuffix,
//         method: "post" ,
//         data   
//     })
// }
// export const updateBusinessPhoto =  (data: any) => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "update_business_photo_url_api" + serviceSuffix,
//         method: "post" ,
//         data   
//     })
// }


// /* User Activities */

// export const apiRegister =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "add_user_api" + serviceSuffix,
//         method: "get"    
//     })
// }

// export const apiLogin =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "user_login_api" + serviceSuffix,
//         method: "get"    
//     })
// }

// export const apiForgotEmail =  (email: string) => {
//     return ApiAdapter.fetchData({
//         url: `${servicePrefix}forgot_email_api${serviceSuffix}?string=${email}`,
//         method: "get"    
//     })
// }
// export const apiGetCookie =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_new_cookie_api" + serviceSuffix,
//         method: "get"    
//     })
// }
// export const apiPageVisits =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "transfer_page_visits_api" + serviceSuffix,
//         method: "get"    
//     })
// }
// export const apiAddPageVisit =  (data: any) => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "create_page_visit_api" + serviceSuffix,
//         method: "post",
//         data 
//     })
// }


// export const apiActivityLog =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "add_activity_log_api" + serviceSuffix,
//         method: "get"    
//     })
// }

// export const apiGetAllCategories =  () => {
//     return ApiAdapter.fetchData({
//         url: servicePrefix + "fetch_all_categories_api" + serviceSuffix,
//         method: "get"    
//     })
// }

