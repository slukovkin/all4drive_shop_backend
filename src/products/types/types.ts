export interface ProductCreationAttributes {
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

export interface ProductUpdateAttributes {
  readonly code: number
  readonly article: string
  readonly title: string
  readonly brand: string
  readonly price: number
  readonly qty: number
  readonly imageUrl: string
}
