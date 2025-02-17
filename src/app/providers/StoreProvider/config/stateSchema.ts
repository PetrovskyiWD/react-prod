import { type UserSchema } from 'essences/user'
import { type LoginSchema } from 'features/AuthByUsername'
import { type Action, type Reducer, type ReducersMapObject, type EnhancedStore } from '@reduxjs/toolkit'

export interface IStateSchema {
  user: UserSchema
  loginForm?: LoginSchema
}
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>
  reduce: (state: IStateSchema, action: Action) => IStateSchema
  add: <K extends StateSchemaKey>(key: K, reducer: Reducer<IStateSchema[K], Action>) => void
  remove: (key: StateSchemaKey) => void
}
export interface ReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: ReducerManager
}
export type StateSchemaKey = keyof IStateSchema
