import { ReactNode, Reducer, createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";


const user = sessionStorage.getItem("user") 

interface IUser {
    id: string | undefined
    verify_string?: string | undefined
    username?: string | undefined
    autho_level?: string | undefined
    user_type?: string | undefined
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
    payload: IUser | null
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
            sessionStorage.setItem("user", JSON.stringify({
                isLoggedIn: true,
                user: action.payload, 
                token: action.payload.id || null
            }))
            return {
                isLoggedIn: true,
                user: { ...action.payload }, 
                token: action.payload.id || null
            }
        case "LOGOUT":
            sessionStorage.setItem("user", '')
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
        const user: IAuthContext = JSON.parse(sessionStorage.getItem("user") || "{}")
        console.log({user})
        if (user?.isLoggedIn) {
            dispatch({type: "LOGIN", payload: user?.user })
        }
    }, [dispatch])
    
    // console.log("Auth State", state)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}