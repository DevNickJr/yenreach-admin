import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { apiLogin, apiRegister } from '@/services/AuthService'
import { useNavigate } from "react-router-dom"
import useTimeOutMessage from "./useTimeOutMessage"


const useAuth = () => {
    // error and isloading states
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { messageState, setMessageState } = useTimeOutMessage()

    const navigate = useNavigate()
    // dispatch function to update auth context
    const { dispatch } = useAuthContext()

    const auth = async (fields, type="login") => {
        setIsLoading(true)
        setError(null)
        // console.log(fields, fields?.email, fields?.password)
        try {
            const response = type==="signup" ? await apiRegister(fields) : await apiLogin(fields)
            // console.log("res", response)
    
            let data = await response.data

            if (data.status === "failed") {
                // console.log("error", data.message)
                setError(data.message)
                type==="signup" ? setMessageState(data.message) : setMessageState("Invalid credentials")
                setIsLoading(false)
            } else {
                data = data.data
                // console.log("success", data, "FROM", from)
                dispatch({type: "LOGIN", payload: data})
                setError(null)
                setIsLoading(false)
                navigate(from?.pathname || '/users', {replace: true})
            }
        } catch (error) {
            setError(null)
            setIsLoading(false)
            // console.log("error", error)
        }       
    }
    
    return { auth, error, isLoading, setError, messageState }
}

export default useAuth