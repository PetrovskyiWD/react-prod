import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/stateSchema'
import { useEffect, type FC } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducerList
  removeAfterUnmount?: boolean
  children: React.ReactNode
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ reducers, removeAfterUnmount, children }) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name}/reducer` })
    })

    return () => {
      if (removeAfterUnmount !== false) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@DESTROY ${name}/reducer` })
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return children
}

export default DynamicModuleLoader
