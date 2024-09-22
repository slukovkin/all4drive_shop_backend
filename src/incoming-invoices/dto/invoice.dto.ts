export class InvoiceCreationDto {
  id?: number
  doc_number: string
  type: string
  customerId: number
  date: string
  orderId?: number
  amount: number
  status: boolean
}