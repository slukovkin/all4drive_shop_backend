export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export interface IUserCreationAttributes {
  email: string;
  password: string;
}

export interface IUserProfile {
  id: number
  email: string
  password: string
  phone: string
  firstname: string
  lastname: string
}

export interface IUserResponse {
  id: number
  email: string
  phone: string
  firstname: string
  lastname: string
  roles: {
    id: number
    value: string
    description: string
  }
}

export interface IUser {
  id: number
  email: string
  roles: {
    id: number
    value: string
    description: string
  }
}