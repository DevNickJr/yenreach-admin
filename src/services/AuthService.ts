import { ILogin, IUserLogin, IUserRegister } from "@/interfaces"
import BaseService from "./BaseService"

const servicePrefix = '/'

export const apiRegister = (data: IUserRegister) => {
    return BaseService.post(`${servicePrefix}/admin_login_api.php`, JSON.stringify(data))
}

export const apiLogin =  (data: IUserLogin) => {
    return BaseService.post<ILogin>(`/admin_login_api.php`, data)
}
