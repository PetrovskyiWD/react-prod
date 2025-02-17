import { type IStateSchema } from 'app/providers/StoreProvider/config/stateSchema'

export const getLoginPassword = (state: IStateSchema): string => state?.loginForm?.password ?? ''
