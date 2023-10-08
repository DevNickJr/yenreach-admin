import { ReactNode, Reducer, createContext, useEffect, useReducer } from "react";


const user = sessionStorage.getItem("user") 

interface IUser {
    _id: string
    // dispatch: React.Dispatch<IAction>;
}
interface IAuthContext {
    isLoggedIn: boolean
    user: IUser | null,
    token: string | null
}


const initialState: IAuthContext = user ? JSON.parse(user) : {
    isLoggedIn: false,
    user: { _id: '' },
    token: ''
};

type IActionType = "LOGIN" | "LOGOUT"
interface IAction {
    type: IActionType
    payload: Partial<IUser>
}
interface IAuthContextProvider extends IAuthContext {
    dispatch: React.Dispatch<IAction>
}

const initAuthContext: IAuthContextProvider = {
    isLoggedIn: false,
    user: { _id: '' },
    token: '',
    dispatch: (): void => {}
}
export const AuthContext = createContext<IAuthContextProvider>(initAuthContext)


// export const AuthContext = createContext(initialState)

const authReducer = (state: IAuthContext, action: IAction) => {
    switch (action.type) {
        case "LOGIN":
            sessionStorage.setItem("user", JSON.stringify(action.payload))
            return {
                isLoggedIn: true,
                user: { _id: action.payload._id || '' }, 
                token: action.payload._id || null
            }
        case "LOGOUT":
            sessionStorage.setItem("user", '')
            return {
                isLoggedIn: false,
                user: { _id: '' },
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
        const user = JSON.parse(sessionStorage.getItem("user")!)
        if (user) {
            dispatch({type: "LOGIN", payload: user})
        }
    }, [dispatch])
    
    // console.log("Auth State", state)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}