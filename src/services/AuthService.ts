import { ILogin, IUserLogin, IUserRegister } from "@/interfaces"
import BaseService from "./BaseService"

const servicePrefix = '/'

export const apiRegister = (data: IUserRegister) => {
    return BaseService.post(`${servicePrefix}/register`, JSON.stringify(data))
}

export const apiLogin =  (data: IUserLogin) => {
    return BaseService.post<ILogin>(`${servicePrefix}/login`, data)
}
