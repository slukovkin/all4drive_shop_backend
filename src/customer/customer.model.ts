import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { ICustomerCreationAttrs } from './types'


@Table({ tableName: 'customer' })
export class Customer extends Model<Customer, ICustomerCreationAttrs> {

  @ApiProperty({ example: 'id', description: 'id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'id', description: 'id клиент' })
  @Column({ type: DataType.INTEGER })
  userId: number

  @ApiProperty({ example: 'Иван', description: 'Имя клиент' })
  @Column({ type: DataType.STRING, allowNull: true })
  firstname: string

  @ApiProperty({ example: 'Иванов', description: 'Фамилия клиента' })
  @Column({ type: DataType.STRING, allowNull: true })
  lastname: string

  @ApiProperty({ example: 'user@gmail.com', description: 'Email клиента' })
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  email: string

  @ApiProperty({ example: '0671111111', description: 'Телефон клиента' })
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  phone: string

  @ApiProperty({ example: 'Отличный клиент', description: 'Описание клиента' })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string
}