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