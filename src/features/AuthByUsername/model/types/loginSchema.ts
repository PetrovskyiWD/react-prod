export enum LoginErrors {
  INCORRECT_AUTH_DATA = 'INCORRECT_AUTH_DATA'
}

export interface LoginSchema {
  username: string
  password: string
  isLoading: boolean
  error?: LoginErrors
}
