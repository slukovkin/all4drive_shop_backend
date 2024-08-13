import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { RoleCreationAttrs } from './types'
import { User } from '../users/users.model'
import { UserRoles } from './user-roles.model'

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {

  @ApiProperty({ example: 'id', description: 'id роли' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'ADMIN', description: 'Уникальное значение роли' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string

  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string

  @BelongsToMany(() => User, () => UserRoles)
  users: User[]
}