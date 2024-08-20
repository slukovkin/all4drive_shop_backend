export interface IProduct {
  id: number
  code: number
  article: string
  title: string
  brand: string
  price: number
  qty: number
  imageUrl: string
  cross: number
}

export interface IProductCreationAttributes {
  id: number
  code: number
  article: string
  title: string
  brand: string
  price: number
  qty: number
  imageUrl: string
  cross: number
}

export interface IProductUpdateAttributes {
  readonly code: number
  readonly article: string
  readonly title: string
  readonly brand: string
  readonly price: number
  readonly qty: number
  readonly imageUrl: string
}
