import { type IStateSchema } from 'app/providers/StoreProvider/config/stateSchema'
import { type LoginSchema } from '../../types/loginSchema'

export const getLoginState = (state: IStateSchema): LoginSchema => state?.loginForm
