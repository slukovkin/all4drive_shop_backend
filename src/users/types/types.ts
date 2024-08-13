export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export interface UserCreationAttributes {
  email: string;
  password: string;
}