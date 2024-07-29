interface UserDetailsResponse {
    userName: string
    role: string
    email: string
}

interface SignUpResponse {
    done: boolean
    success: string
    error: string | null
}
interface LoginResponse {
    access:string
    done: boolean
    success: boolean
    refresh:string
    userData: UserDetailsResponse
    error: string | null
}
interface ModalFormResponse {
    access:string
    done: boolean
    success: boolean
    refresh:string
    userData: UserDetailsResponse
    error: string | null
}