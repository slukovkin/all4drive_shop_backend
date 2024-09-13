import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { IProductInBasket } from './types/product-order.interface'

@Table({ tableName: 'orders' })
export class Order extends Model<Order> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number // id заказа

  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number // id пользователя

  @Column({ type: DataType.JSON })
  productList: IProductInBasket[] // список товаров в заказе
}