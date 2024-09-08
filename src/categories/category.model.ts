import { ICategoryCreationAttributes } from './types/types'
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { Product } from '../products/products.model'

@Table({ tableName: 'categories' })
export class Category extends Model<Category, ICategoryCreationAttributes> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number // id валюты

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string // код валюты

  @Column({ type: DataType.STRING, allowNull: true })
  description: string // наименование валюты

  @Column({ type: DataType.DOUBLE, allowNull: true })
  percentage: number // курс валюты

  @HasMany(() => Product)
  products: Product[]
}