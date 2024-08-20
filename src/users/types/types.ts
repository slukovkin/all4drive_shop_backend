export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export interface IUserCreationAttributes {
  email: string;
  password: string;
}