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

  @Column({ type: DataType.DOUBLE, allowNull: true })
  priceTypeOne: number // тип отпусных цен 1

  @Column({ type: DataType.DOUBLE, allowNull: true })
  priceTypeTwo: number // тип отпусных цен 2

  @Column({ type: DataType.DOUBLE, allowNull: true })
  priceTypeThree: number // тип отпусных цен 3

  @Column({ type: DataType.DOUBLE, allowNull: true })
  markup: number // наценка по умолчанию

  @Column({ type: DataType.INTEGER })
  employeeId: number // id сотрудника по умолчанию

  @Column({ type: DataType.STRING })
  telegramKey: string
}