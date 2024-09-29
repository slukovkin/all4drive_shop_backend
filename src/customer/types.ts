export interface ICustomerCreationAttrs {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  description?: string;
}

export interface ICustomerUpdateAttrs {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  description?: string;
}