import { type UserSchema } from 'essences/user'
import { type LoginSchema } from 'features/AuthByUsername'

export interface IStateSchema {
  user: UserSchema
  loginForm: LoginSchema
}
