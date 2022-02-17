import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import counter from './counter/slice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    counter,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
