export class InvoiceCreationDto {
  id?: number
  doc_number: string
  type: string
  customerId: number
  date: string
  orderId?: number
  amount: number
  status: boolean
  products: IProductSelect[]
}

export interface IProductSelect {
  productId: number
  code: number
  article: string
  title: string
  brand: string
  categoryId: number
  storeId: number
  qty: number
  priceIn: number
  priceOut: number
}