import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Product } from '../products/products.model'
import { Store } from '../stores/stores.model'

@Table({ tableName: 'product_stores' })
export class ProductStore extends Model<ProductStore> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  productId: number

  @ForeignKey(() => Store)
  @Column({ type: DataType.INTEGER, allowNull: false })
  storeId: number

  @Column({ type: DataType.INTEGER, allowNull: true })
  qty: number
}