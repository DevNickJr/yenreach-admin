import ApiAdapter from "./ApiService"

const servicePrefix = "/users"
const serviceSuffix = ".php"

const token = JSON.parse(sessionStorage.getItem("user") || `{}`)?.verify_string


/* Get user */
export const apiGetUser = (user_string) => {
    // console.log("user", user_string, "token", token)
    return ApiAdapter.fetchData({
        url: `fetch_user_by_string_api${serviceSuffix}?string=${user_string || token}`,
        method: "get"    
    })
}

/* Update user */
export const apiUpdateUser = (data) => {
    return ApiAdapter.fetchData({
        url: `edit_user_profile_api${serviceSuffix}`,
        method: "post",
        data
    })
}
/* Update user */
export const apiUpdateUserCv = (data) => {
    return ApiAdapter.fetchData({
        url: `update_user_cv_api${serviceSuffix}`,
        method: "post",
        data
    })
}
/* Update Password */
export const apiUpdatePassword = (data) => {
    return ApiAdapter.fetchData({
        url: `change_user_password_api${serviceSuffix}`,
        method: "post",
        data
    })
}

/* Activity Log */
export const apiAddActivityLog = (data) => {
    return ApiAdapter.fetchData({
        url: `add_activity_log_api${serviceSuffix}`,
        method: "post",
        data
    })
}

/* Get user businesses */
export const apiGetAllBusinesses = (id) => {
    // console.log("token", token)
    return ApiAdapter.fetchData({
        url: `fetch_business_by_user_string_api${serviceSuffix}?string=${id || token}`,
        method: "get"    
    })
}

/* Get user business */
export const apiGetOneBusiness = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_by_string_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get user business */
export const apiGetBusinessPageVisits = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_pagevisits_by_business_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get business categories */
export const apiGetBusinessCategories = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_categories_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get business photos */
export const apiGetBusinessPhotos = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_public_photos_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

export const apiAddBusinessPhoto = (data) => {
    return ApiAdapter.fetchData({
        url: `add_business_photo_api${serviceSuffix}`,
        method: "post",
        data
    })
}

/* Get business videos */
export const apiGetBusinessVideos = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_public_videolinks_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get business working hours */
export const apiGetBusinessWorkingHours = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_working_hours_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get business branches */
export const apiGetBusinessBranches = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_public_branches_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get business Subscription */
export const apiGetBusinessSubscription = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_latest_subscription_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get Related Businesses */
export const apiGetRelatedBusinesses = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_related_businesses_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get Related Businesses */
export const apiGetBusinessReviews = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_user_reviews_api${serviceSuffix}?string=${business_token}`,
        method: "get"    
    })
}

/* Get Billboard Payment */
export const apiGetBillboardPaymentTypes = () => {
    return ApiAdapter.fetchData({
        url: `fetch_all_advert_payment_types_api${serviceSuffix}`,
        method: "get"    
    })
}

/* Get Billboard Payment */
export const apiGetUserBillboardApplications = (user_string) => {
    return ApiAdapter.fetchData({
        url: `fetch_billboard_applications_by_user_api${serviceSuffix}?user_string=${user_string || token}`,
        method: "get"    
    })
}

/* Get Subscriptions */
export const apiGetAllSubscriptions = () => {
    return ApiAdapter.fetchData({
        url: `fetch_all_business_subscriptions_api${serviceSuffix}`,
        method: "get"    
    })
}
/* Get Business Subscriptions */
export const apiGetBusinessSubscriptions = (string) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_subscriptions_api${serviceSuffix}?string=${string}`,
        method: "get"    
    })
}

/* Get Billboard Payment */
export const apiGetAllSubscriptionPlans = (package_string) => {
    return ApiAdapter.fetchData({
        url: `fetch_subscription_plans_api${serviceSuffix}?string=${package_string}`,
        method: "get"    
    })
}

/* Get Saved/Favorite Businesses */
export const apiGetSavedBusinesses = () => {
    // console.log("token", token)
    return ApiAdapter.fetchData({
        url: `fetch_saved_businesses_api${serviceSuffix}?string=${token}`,
        method: "get"    
    })
}

/* Add business */
export const apiAddBusiness = (data) => {
    return ApiAdapter.fetchData({
        url: `add_business_api${serviceSuffix}`,
        method: "post",
        data: {...data, user_string: data?.user_string || token}
    })
}
/* Edit business */
export const apiEditBusiness = (data) => {
    return ApiAdapter.fetchData({
        url: `edit_business_profile_api${serviceSuffix}`,
        method: "post",
        data: {...data, user_string: data?.user_string || token}
    })
}
/* Edit business Profile Image */
export const apiEditBusinessProfileImage = (data) => {
    return ApiAdapter.fetchData({
        url: `update_profile_image_api${serviceSuffix}`,
        method: "post",
        data
    })
}

/* Edit business Profile Image */
export const apiEditBusinessCoverImage = (data) => {
    return ApiAdapter.fetchData({
        url: `update_cover_image_api${serviceSuffix}`,
        method: "post",
        data
    })
}

/* Get states */
export const apiGetStates = () => {
    return ApiAdapter.fetchData({
        url: `fetch_all_states_api${serviceSuffix}`,
        method: "get",
    })
}

/* Get lgas */
export const apiGetLGAs = () => {
    return ApiAdapter.fetchData({
        url: `fetch_all_lgas_api${serviceSuffix}`,
        method: "get",
    })
}


/* Add business page visits */
export const apiAddPageVisits = (data) => {
    return ApiAdapter.fetchData({
        url: `create_page_visit_api${serviceSuffix}`,
        method: "post",
        data: {...data, user_string: data?.user_string || token}   
    })
}



