export class CreateProductDto {
  code: number
  article: string
  title: string
  brand: string
  price: number
  qty: number
  imageUrl: string | null
  cross: number
}