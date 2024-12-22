import { type FC } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type IStateSchema } from '../config/stateSchema'

interface StoreProviderProps {
  children: React.ReactNode
  initialState?: IStateSchema
}

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState)

  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
