import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import authReducer from '../redux-slices/global.slice'; // Adjust the path accordingly

const store = configureStore({
  reducer: {
    auth: authReducer,
    // other reducers...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export default store;
