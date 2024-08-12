/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the initial state
export interface AuthState {
  user: any | null;
  accessToken: string | null;
  refreshToken: string | null;
}

// Define the initial state using the AuthState type
const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

// Define the payload type for the setCredentials action
interface CredentialsPayload {
  userData: any;
  accessToken: string;
  refreshToken: string;
}

// Create the slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<CredentialsPayload>) {
      console.log(action.payload);
      console.log(action.payload.userData);
      
      const { userData, accessToken, refreshToken } = action.payload;
      state.user = userData;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    
    
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;

// Define the types for the selector functions
import { RootState } from '../store/store'; // Adjust the import according to your store setup


export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.accessToken;
