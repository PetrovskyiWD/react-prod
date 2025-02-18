import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type IStateSchema } from './stateSchema'
import { userReducer } from 'essences/user'
import { createReducerManager } from './reducerManager'

export const createReduxStore = (initialState?: IStateSchema): ReturnType<typeof configureStore> => {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}
