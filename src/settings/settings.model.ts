import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { ISettingCreationAttributes } from './types/types'

@Table({ tableName: 'settings' })
export class Settings extends Model<Settings, ISettingCreationAttributes> {

  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  firmName: string // название фирмы

  @Column({ type: DataType.INTEGER })
  currencyId: number // id валюты учета

  @Column({ type: DataType.INTEGER })
  storeId: number // id склада по умолчанию

  @Column({ type: DataType.INTEGER })
  employeeId: number // id сотрудника по умолчанию

  @Column({ type: DataType.INTEGER })
  telegramKey: string

}