import { type IStateSchema } from 'app/providers/StoreProvider/config/stateSchema'
import { type LoginErrors } from '../../types/loginSchema'

export const getLoginError = (state: IStateSchema): LoginErrors | undefined => state?.loginForm?.error
