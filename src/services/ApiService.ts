import BaseService from "./BaseService";

const ApiAdapter = {
    fetchData(params: string) {
        return new Promise((resolve, reject) => {
            try {
                const response = BaseService(params)
                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default ApiAdapter;