import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { ManufacturerDto } from './dto/manufacturer.dto'
import { Country } from '../country/country.model'

@Table({ tableName: 'manufacturers', createdAt: false, updatedAt: false })
export class Manufacturer extends Model<Manufacturer, ManufacturerDto> {

  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number // id производителя

  @Column({ type: DataType.INTEGER })
  code: number // код производителя

  @Column({ type: DataType.STRING })
  title: string // Наименование производителя

  @ForeignKey(() => Country)
  @Column({ type: DataType.INTEGER })
  countryId: number // id страны производителя

  @BelongsTo(() => Country)
  countries: Country

}