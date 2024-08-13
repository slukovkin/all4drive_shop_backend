export interface ProductCreationAttributes {
  code: number
  article: string
  title: string
  cross: number
}

export interface ProductUpdateAttributes {
  readonly article: string
  readonly title: string
}