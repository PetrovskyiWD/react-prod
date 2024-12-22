import { configureStore } from '@reduxjs/toolkit'
import { type IStateSchema } from './stateSchema'

export const createReduxStore = (initialState?: IStateSchema): ReturnType<typeof configureStore> => {
  return configureStore<IStateSchema>({
    reducer: {},
    preloadedState: initialState,
    devTools: __IS_DEV__
  })
} 

// export type RootState = ReturnType<typeof store.getState>
