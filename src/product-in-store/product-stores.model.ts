import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Product } from '../products/products.model'
import { Store } from '../stores/stores.model'
import { ApiProperty } from '@nestjs/swagger'

@Table({ tableName: 'product_stores' })
export class ProductStore extends Model<ProductStore> {

  @ApiProperty({ example: 'id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: '1', description: 'id товара' })
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  productId: number

  @ApiProperty({ example: '1', description: 'id магазина' })
  @ForeignKey(() => Store)
  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
  storeId: number

  @ApiProperty({ example: '10', description: 'Количество товара' })
  @Column({ type: DataType.DOUBLE, allowNull: true })
  qty: number
}