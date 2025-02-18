import { type IStateSchema } from 'app/providers/StoreProvider/config/stateSchema'

export const getLoginUsername = (state: IStateSchema): string => state?.loginForm?.username ?? ''
