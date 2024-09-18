import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript'
import { CountryDto } from './dto/country.dto'
import { Manufacturer } from '../manufacturer/manufacturer.model'

@Table({ tableName: 'countries', createdAt: false, updatedAt: false })
export class Country extends Model<Country, CountryDto> {

  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number // id страны

  @ForeignKey(() => Manufacturer)
  @Column({ type: DataType.INTEGER })
  manufacturerId: number

  @Column({ type: DataType.INTEGER })
  code: number // код страны

  @Column({ type: DataType.STRING })
  title: string // Наименование страны

  @HasMany(() => Manufacturer)
  manufacturer: Manufacturer

}