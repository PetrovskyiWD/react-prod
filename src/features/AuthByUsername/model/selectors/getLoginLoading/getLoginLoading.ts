import { type IStateSchema } from 'app/providers/StoreProvider/config/stateSchema'

export const getLoginLoading = (state: IStateSchema): boolean => state?.loginForm?.isLoading ?? false
