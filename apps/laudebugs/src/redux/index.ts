import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appReducer } from './store'

const rootReducer = combineReducers({
  app: appReducer
})

/*  Redux store */
export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
