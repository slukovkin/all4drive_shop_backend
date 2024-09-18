import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { ManufacturerDto } from './dto/manufacturer.dto'

@Table({ tableName: 'manufacturers' })
export class Manufacturer extends Model<Manufacturer, ManufacturerDto> {

  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number // id производителя

  @Column({ type: DataType.INTEGER })
  code: number // код производителя

  @Column({ type: DataType.STRING })
  title: string // Наименование производителя

  @Column({ type: DataType.STRING })
  countryId: number // id страны производителя

}