import { ReactNode, Reducer, createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { AdminAuthorizationLevel } from "src/interfaces";


const user = localStorage.getItem("user") 

export interface IUser {
    id: string | undefined
    username?: string | undefined
    authorizationLevel?: AdminAuthorizationLevel | undefined
    phoneNumber?: string | undefined
    personal_email?: string | undefined
    official_email?: string | undefined
}
interface IAuthContext {
    isLoggedIn: boolean
    user: IUser | null,
    token: string | null
}


const initialState: IAuthContext = user ? JSON.parse(user) : {
    isLoggedIn: false,
    user: null,
    token: ''
};

type IActionType = "LOGIN" | "LOGOUT"
interface IAction {
    type: IActionType
    payload: { user: IUser, token: string } | null
}
interface IAuthContextProvider extends IAuthContext {
    dispatch: React.Dispatch<IAction>
}

const initAuthContext: IAuthContextProvider = {
    isLoggedIn: false,
    user: null,
    token: '',
    dispatch: (): void => {}
}
export const AuthContext = createContext<IAuthContextProvider>(initAuthContext)


// export const AuthContext = createContext(initialState)

const authReducer = (state: IAuthContext, action: IAction) => {
    switch (action.type) {
        case "LOGIN": 
            if (!action.payload) {
                toast.info("No Payload Provided")
                return {
                    isLoggedIn: false,
                    user: null,
                    token: ''
                }
            }
            localStorage.setItem("user", JSON.stringify({
                isLoggedIn: true,
                user: action.payload.user, 
                token: action.payload.token || null
            }))
            return {
                isLoggedIn: true,
                user: { ...action.payload?.user }, 
                token: action.payload?.token || null
            }
        case "LOGOUT":
            localStorage.setItem("user", '')
            return {
                isLoggedIn: false,
                user: null,
                token: ''
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({children}: { children: ReactNode }) => {
    // const [state, dispatch] = useReducer(authReducer, initialState)
    const [state, dispatch] = useReducer<Reducer<IAuthContext, IAction>>(authReducer, initialState)

    
    useEffect(() => {
        const user: IAuthContext = JSON.parse(localStorage.getItem("user") || "{}")
        if (user?.isLoggedIn && user?.user) {
            dispatch({type: "LOGIN", payload: { user: user?.user, token: user?.token || '' } })
        }
    }, [dispatch])
    
    // console.log("Auth State", state)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}