export interface ICustomer {
  id: number
  name: string
  login: string
  devices: number
  avatar_url: string
  created_at: string
}

export interface IRegisterForm {
  name: string
  username: string
  email: string
  password: string
}

export interface ILoginForm {
  email: string
  password: string
}
