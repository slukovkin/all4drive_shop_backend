import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { IStoreCreationAttributes } from './types/types'
import { DataTypes } from 'sequelize'
import { ProductStore } from '../product-in-store/product-stores.model'
import { Product } from '../products/products.model'


@Table({ tableName: 'stores' })
export class Store extends Model<Store, IStoreCreationAttributes> {

  @Column({ type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string

  @Column({ type: DataType.STRING, allowNull: true })
  description: string

  @BelongsToMany(() => Product, () => ProductStore)
  products: Product[]
}