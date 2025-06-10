import { ILogin, IUserLogin } from "@/interfaces"
import BaseService from "./BaseService"

const servicePrefix = '/auth'

export const apiLogin =  (data: IUserLogin) => {
    return BaseService.post<ILogin>(`${servicePrefix}/admin-login`, data)
}
