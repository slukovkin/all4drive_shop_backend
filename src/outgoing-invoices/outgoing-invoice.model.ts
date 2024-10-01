import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Order } from '../orders/order.model'
import { User } from '../users/users.model'
import { InvoiceCreationDto } from './dto/outgoing-invoice.dto'
import { IProductSelect } from '../incoming-invoices/dto/invoice.dto'

@Table({ tableName: 'outgoing_invoices' })
export class OutgoingInvoice extends Model<OutgoingInvoice, InvoiceCreationDto> {

  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number

  @Column({ type: DataType.STRING, allowNull: false })
  doc_number: string

  @Column({ type: DataType.STRING, allowNull: false })
  type: string

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  customerId: number

  @Column({ type: DataType.STRING, allowNull: false })
  date: string

  @ForeignKey(() => Order)
  @Column({ type: DataType.INTEGER, allowNull: true })
  orderId: number

  @Column({ type: DataType.DOUBLE, allowNull: false })
  amount: number

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  status: boolean

  @Column({ type: DataType.JSON })
  products: IProductSelect[]

  @BelongsTo(() => Order)
  order: Order

  @BelongsTo(() => User)
  customer: User
}