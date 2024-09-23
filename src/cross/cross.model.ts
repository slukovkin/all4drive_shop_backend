import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { CrossDto } from './dto/cross.dto'

@Table({ tableName: 'cross_table', createdAt: false, updatedAt: false })
export class Cross extends Model<Cross, CrossDto> {

  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number

  @Column({ type: DataType.STRING })
  group: string

  @Column({ type: DataType.STRING })
  code: string

  @Column({ type: DataType.STRING })
  origin: string
}