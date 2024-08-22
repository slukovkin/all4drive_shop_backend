export interface ICustomerCreationAttrs {
  id?: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  description: string;
}

export interface ICustomerUpdateAttrs {
  name: string;
  surname: string;
  email: string;
  phone: string;
  description: string;
}