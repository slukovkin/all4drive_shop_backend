export interface IProductOrderInterface {
  id: number
  qty: number
  price: number
}

export interface IProductInBasket {
  id: number
  code: number
  article: string
  title: string
  brand: string
  categoryId: number
  imageUrl: string
  cross: number
  storeId: number
  qty: number
  priceIn: number
  priceOut: number
}