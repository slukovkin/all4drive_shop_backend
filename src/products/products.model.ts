import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { IProductCreationAttributes } from './types/types'
import { Store } from '../stores/stores.model'
import { ProductStore } from '../product-in-store/product-stores.model'
import { Category } from '../categories/category.model'


@Table({ tableName: 'products' })
export class Product extends Model<Product, IProductCreationAttributes> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @Column({ type: DataType.INTEGER, unique: true })
  code: number

  @Column({ type: DataType.STRING, allowNull: false })
  article: string

  @Column({ type: DataType.STRING, allowNull: false })
  title: string

  @Column({ type: DataType.STRING, allowNull: true })
  brand: string

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: true })
  categoryId: number

  @Column({ type: DataType.DOUBLE, allowNull: false })
  price: number

  @Column({ type: DataType.DOUBLE, allowNull: false })
  qty: number

  @Column({ type: DataType.STRING, allowNull: true })
  imageUrl: string

  @Column({ type: DataType.INTEGER })
  cross: number

  @BelongsToMany(() => Store, () => ProductStore)
  stores: Store[]

  @BelongsTo(() => Category)
  category: Category
}