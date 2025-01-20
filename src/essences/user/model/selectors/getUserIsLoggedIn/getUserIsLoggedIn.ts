import { type IStateSchema } from 'app/providers/StoreProvider/config/stateSchema'

export const getUserIsLoggedIn = (state: IStateSchema): boolean => state?.user?.isLoggedIn
