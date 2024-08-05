/* eslint-disable @typescript-eslint/no-explicit-any */
// src/hooks/useGlobalState.ts
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';

export type UseGlobalStateReturnType = {
  userdetails: any | null;
  accessToken: string | null;
  refreshToken: string | null;
};

export const useGlobalState = (): UseGlobalStateReturnType => {
  const userdetails = useAppSelector((state: RootState) => state.auth.user);
  const accessToken = useAppSelector(
    (state: RootState) => state.auth.accessToken
  );
  const refreshToken = useAppSelector(
    (state: RootState) => state.auth.refreshToken
  );

  return { userdetails, accessToken, refreshToken };
};
