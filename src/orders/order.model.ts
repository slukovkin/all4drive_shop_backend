import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { IProductOrderInterface } from './types/product-order.interface'

@Table({ tableName: 'orders' })
export class Order extends Model<Order> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number // id заказа

  @Column({ type: DataType.INTEGER, unique: true, allowNull: false })
  userId: number // id пользователя

  @Column({ type: DataType.JSON })
  productList: IProductOrderInterface[] // список товаров в заказе
}