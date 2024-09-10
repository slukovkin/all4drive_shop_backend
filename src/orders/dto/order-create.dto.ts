import { IProductOrderInterface } from '../types/product-order.interface'

export class CreateOrderDto {
  id?: number
  userId: number
  productList: IProductOrderInterface[]
}