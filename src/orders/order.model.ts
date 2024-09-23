import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { IProductInBasket } from './types/product-order.interface'
import { User } from '../users/users.model'

@Table({ tableName: 'orders' })
export class Order extends Model<Order> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number // id заказа

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number // id пользователя

  @Column({ type: DataType.JSON })
  productList: IProductInBasket[] // список товаров в заказе

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isDone: boolean

  @Column({ type: DataType.STRING })
  city: string

  @Column({ type: DataType.STRING })
  post: string

  @BelongsTo(() => User)
  users: User
}