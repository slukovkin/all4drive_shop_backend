import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { CountryDto } from './dto/country.dto'

@Table({ tableName: 'countries' })
export class Country extends Model<Country, CountryDto> {

  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number // id страны

  @Column({ type: DataType.INTEGER })
  code: number // код страны

  @Column({ type: DataType.STRING })
  title: string // Наименование страны
}