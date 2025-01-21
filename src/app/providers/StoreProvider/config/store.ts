import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type IStateSchema } from './stateSchema'
import { userReducer } from 'essences/user'
import { loginReducer } from 'features/AuthByUsername'

export const createReduxStore = (initialState?: IStateSchema): ReturnType<typeof configureStore> => {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    user: userReducer,
    loginForm: loginReducer
  }

  return configureStore<IStateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: __IS_DEV__
  })
}
