import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { CurrencyCode, ICurrencyCreationAttributes } from './types/types'

@Table({ tableName: 'currency' })
export class Currency extends Model<Currency, ICurrencyCreationAttributes> {

  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number // id валюты

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  code: CurrencyCode // код валюты

  @Column({ type: DataType.STRING, allowNull: false })
  name: string // наименование валюты

  @Column({ type: DataType.FLOAT, allowNull: false })
  rate: number // курс валюты
}

