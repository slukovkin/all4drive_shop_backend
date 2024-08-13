export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export interface UserCreationAttrs {
  email: string;
  password: string;
}