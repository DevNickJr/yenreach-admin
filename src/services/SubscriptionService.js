import ApiAdapter from "./ApiService"

const servicePrefix = "/subscription"
const serviceSuffix = ".php"

const token = JSON.parse(sessionStorage.getItem("user") || `{}`)?.verify_string


/* Get user */
export const apiGetUser = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_user_by_string_api${serviceSuffix}?string=${token}`,
        method: "get"    
    })
}


/* Initiate Billboard Subscription */
export const apiInitiateBillboardSubscription = (data) => {
    return ApiAdapter.fetchData({
        url: `/initiate_billboard_application_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Initiate Subscription */
export const apiInitiateSubscription = (data) => {
    return ApiAdapter.fetchData({
        url: `/initiate_subscription_payment_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Initiate Payment */
export const apiInitiatePayment = (data) => {
    return ApiAdapter.fetchData({
        url: `/initiate_payments_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Verify Payment */
export const apiVerifyPayment = (data) => {
    return ApiAdapter.fetchData({
        url: `/flutterwave_verify_transaction_api${serviceSuffix}`,
        method: "post",
        data    
    })
}
/* Get Transaction */
export const apiGetTransaction = (string) => {
    return ApiAdapter.fetchData({
        url: `/fetch_transaction_by_verify_string_api${serviceSuffix}?string=${string}`,
        method: "get"
    })
}

/* Subscribe Business */
export const apiSubscribeBusiness = (data) => {
    return ApiAdapter.fetchData({
        url: `/business_subscription_api${serviceSuffix}`,
        method: "post",
        data
    })
}

/* Subscribe Business */
export const apiMarkBillboardAsPaid = (data) => {
    return ApiAdapter.fetchData({
        url: `/mark_billboard_application_as_paid_api${serviceSuffix}`,
        method: "post",
        data
    })
}



/* Get Business Subscription */
export const apiGetAllSubscriptions = (business_token) => {
    return ApiAdapter.fetchData({
        url: `fetch_business_subscriptions_api${serviceSuffix}string=${business_token}`,
        method: "get"    
    })
}