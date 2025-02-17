import { type Action, combineReducers, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchemaKey, type IStateSchema, type ReducerManager } from './stateSchema'

export function createReducerManager(initialReducers: ReducersMapObject<IStateSchema>): ReducerManager {
  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers(reducers)
  let keysToRemove: StateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,
    reduce: (state: IStateSchema, action: Action) => {
      if (keysToRemove.length > 0) {
        state = { ...state }

        for (const key of keysToRemove) {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete state[key]
        }

        keysToRemove = []
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return combinedReducer(state, action)
    },
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (key === undefined || reducers[key] !== undefined) return

      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },
    remove: (key: StateSchemaKey) => {
      if (key === undefined || reducers[key] === undefined) {
        return
      }

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    }
  }
}
