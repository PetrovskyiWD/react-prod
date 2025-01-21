import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage'

const initialState: UserSchema = {
  isLoggedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
      state.isLoggedIn = true
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)

      if (user !== null) {
        state.authData = JSON.parse(user)
        state.isLoggedIn = true
      }
    },
    removeAuthData: (state) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY)

      state.authData = undefined
      state.isLoggedIn = false
    }
  }
})

export const { actions: userActions, reducer: userReducer } = userSlice
