import { createSlice, createSelector } from '@reduxjs/toolkit'
import { setLocalStorageItem } from '@laudebugs/utils'
import { RootState } from '.'

export interface AppState {
  isNpm: boolean
}

const initialState: AppState = {
  isNpm: false
}
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsNpm: (state, action) => {
      state.isNpm = action.payload
      setLocalStorageItem('isNpm', state.isNpm)
      setLocalStorageItem('isYarn', !state.isNpm)
      return state
    }
  }
})

export const appReducer = appSlice.reducer
export const appActions = appSlice.actions
const selectAppState = (state: RootState) => state.app

export const selectIsNpm = createSelector(selectAppState, (state: AppState) => state.isNpm)
