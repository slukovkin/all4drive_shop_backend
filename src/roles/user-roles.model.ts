import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Role } from './roles.model'
import { User } from '../users/users.model'

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {

  @ApiProperty({ example: 'id', description: 'id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ForeignKey(() => Role)
  @ApiProperty({ example: '1', description: 'id роли' })
  @Column({ type: DataType.NUMBER })
  roleId: number

  @ForeignKey(() => User)
  @ApiProperty({ example: '2', description: 'id пользователя' })
  @Column({ type: DataType.NUMBER })
  userId: number
}