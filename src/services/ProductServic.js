import ApiAdapter from "./ApiService"

const servicePrefix = "/products"
const serviceSuffix = ".php"

const token = JSON.parse(sessionStorage.getItem("user") || `{}`)?.verify_string



/* Get user */
export const apiGetUser = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_user_by_string_api${serviceSuffix}?string=${token}`,
        method: "get"    
    })
}


/* Add Product */
export const apiAddProduct = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/add_product_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Add Product Category */
export const apiAddProductCategory = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/add_product_category_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Add Product Category List */
export const apiAddProductCategoryList = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/add_product_category_list_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Add Product Photo */
export const apiAddProductPhoto = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/add_product_photo_api${serviceSuffix}`,
        method: "post",
        data    
    })
}

/* Delete Product */
export const apiDeleteProduct = ({business_string, product_string}) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/delete_product_api${serviceSuffix}?business_string=${business_string}&product_string=${product_string}`,
        method: "get",
    })
}

/* Delete Product Category */
export const apiDeleteProductCategory = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/delete_product_category_api${serviceSuffix}`,
        method: "delete",
        data    
    })
}

/* Delete Product Photo */
export const apiDeleteProductPhoto = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/delete_product_photo_api${serviceSuffix}`,
        method: "delete",
        data    
    })
}

/* Get Products */
export const apiGetAllProducts = (query) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_active_product_api${serviceSuffix}?per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}&search=${query?.search || ''}`,
        method: "get",  
    })
}

/* Sort Products */
export const apiSortProducts = (query) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/sort_active_product_api${serviceSuffix}?sort=${query?.sort || ''}&per_page=${query?.num_per_page || 40}&skip=${query?.page ? (query.page - 1) * (query?.num_per_page || 40) : 0}`,
        method: "get",  
    })
}

/* Get Products */
export const apiGetAllProductsAdmin = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_all_product_api${serviceSuffix}`,
        method: "get",  
    })
}

/* Get Products by Business string */
export const apiGetAllBusinessProducts = (business_string) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_product_by_business_api${serviceSuffix}?string=${business_string}`,
        method: "get",  
    })
}

/* Get One Product */
export const apiGetProduct = (id) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_one_product_api${serviceSuffix}?string=${id}`,
        method: "get",  
    })
}

/* Get One Product */
export const apiGetRelatedProducts = (id) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_related_product_api${serviceSuffix}?string=${id}`,
        method: "get",  
    })
}

/* Get Product Category */
export const apiGetProductCategory = () => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/fetch_product_category_api${serviceSuffix}`,
        method: "get",  
    })
}

/* Update Product */
export const apiUpdateProduct = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/update_product_api${serviceSuffix}`,
        method: "post",
        data
    })
}

/* Update Product Status */
export const apiUpdateProductStatus = (data) => {
    return ApiAdapter.fetchData({
        url: `${servicePrefix}/update_product_status_api${serviceSuffix}`,
        method: "post",
        data
    })
}



