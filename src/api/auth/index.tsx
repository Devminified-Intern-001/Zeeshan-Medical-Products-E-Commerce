/* eslint-disable @typescript-eslint/no-explicit-any */
import request from '../../utils/request'
// import { stringify } from 'qs'

// export const setCredentials = async (params: {
//     telegram_id: number
//     kol_id: number
// }): Promise<ChatHistoryResponse> => {
//     return request(`/kol/chat/history?${stringify(params)}`).then(
//         (res: any) => {
//             if (!res || !res.success) {
//                 throw new Error(res?.data?.message || '')
//             }
//             return res
//         }
//     )
// }

export const userProfileGetDetails = async (): Promise<IUserProfileDetailsResponse> => {
    return request(`/User`).then(
        (res: any) => {
            if (!res || !res.success) {
                throw new Error(res?.data?.message || '')
            }
            return res
        }
    )
}
export const userProfilePostDetails = async (data: {
    gender?: string
    dateOfBirth?: Date
    nic?: string
    mobile?: string
}): Promise<IUserProfileDetailsPostResponse> => {
    return await request('/User', {
        data,
        method: 'PUT',
    }).then((res: any) => {
        if (!res || !res.success) {
            throw new Error(res?.data?.message || '')
        }
        return res
    })
}
export const userProfilemage = async (
    updateImage?: string): Promise<IUserProfileImageResponse> => {
    return await request('/User', {
        updateImage,
        method: 'POST',
    }).then((res: any) => {
        if (!res || !res.success) {
            throw new Error(res?.data?.message || '')
        }
        return res
    })
}
export const signup = async (data: {
    userName: string
    email: string
    password: string
    terms: boolean
}): Promise<SignUpResponse> => {
    return await request('/signUp', {
        data,
        method: 'POST',
    }).then((res: any) => {
        if (!res || !res.success) {
            throw new Error(res?.data?.message || '')
        }
        return res
    })
}
export const login = async (data: {
    userName: string
    password: string
}): Promise<LoginResponse> => {
    return await request('/logIn', {
        data,
        method: 'POST',
    }).then((res: any) => {
        if (!res || !res.success) {
            throw new Error(res?.data?.message || '')
        }
        return res
    })
}
export const ModalForm = async (data: {
    email: string,
    age: string,
    referrer: string,
    gender: string,
    showGender: string,
    location: string,
    diagnosis: string,
    indicators: string,
    subType: string,
    startTime: string,
}): Promise<ModalFormResponse> => {
    return await request('/form/submitForm', {
        data,
        method: 'POST',
    }).then((res: any) => {
        if (!res || !res.success) {
            throw new Error(res?.data?.message || '')
        }
        return res
    })
}

