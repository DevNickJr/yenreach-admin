interface IPaginate<T> {
    num_per_page: number
    total: number
    data: T[]
}

export const paginate = <T,>({num_per_page=40, data=[], total}: IPaginate<T>) => {
    // if (page < 1 || !page) page = 1
    // const start = (page - 1) * num_per_page
    // const end = page * num_per_page
    return {
        data: data, 
        pages: Math.ceil(total / num_per_page)
    }
}



export default paginate