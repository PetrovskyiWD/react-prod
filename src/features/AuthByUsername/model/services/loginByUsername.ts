import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions, type User } from 'essences/user'
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage'
import { LoginErrors } from '../types/loginSchema'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: LoginErrors }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData)

      if (response.data === null) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))

      thunkAPI.dispatch(userActions.setAuthData(response.data as User))

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(LoginErrors.INCORRECT_AUTH_DATA)
    }
  }
)
