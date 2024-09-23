import { IProductInBasket } from '../types/product-order.interface'

export class CreateOrderDto {
  id?: number
  userId: number
  productList: IProductInBasket[]
  city?: string
  post?: string
}