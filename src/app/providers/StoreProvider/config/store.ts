import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type IStateSchema } from './stateSchema'
import { userReducer } from 'entities/user'

export const createReduxStore = (initialState?: IStateSchema): ReturnType<typeof configureStore> => {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    user: userReducer
  }

  return configureStore<IStateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: __IS_DEV__
  })
}

// export type RootState = ReturnType<typeof store.getState>
