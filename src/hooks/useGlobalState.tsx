// src/hooks/useGlobalState.ts
import { useAppSelector } from '../store/hooks'
import { RootState } from '../store/store'

export type UseGlobalStateReturnType = {
    user: any | null;
    accessToken: string | null;
    refreshToken: string | null;
}

export const useGlobalState = (): UseGlobalStateReturnType => {
    const templateId = useAppSelector(
        (state: RootState) => state.global.templateId
    )
    const userName = useAppSelector((state: RootState) => state.global.userName)

    return { templateId, userName }
}
