import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { IUserCreationAttributes } from './types/types'
import { Role } from '../roles/roles.model'
import { UserRoles } from '../roles/user-roles.model'

@Table({ tableName: 'users' })
export class User extends Model<User, IUserCreationAttributes> {

  @ApiProperty({ example: 'id', description: 'id of user' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'email@gmail.com', description: 'email of user' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string

  @ApiProperty({ example: '1111111', description: 'password of user' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string

  @ApiProperty({ example: '0671234567', description: 'phone of user' })
  @Column({ type: DataType.STRING, allowNull: true })
  phone: string | null

  @ApiProperty({ example: 'Ivan', description: 'firstname of user' })
  @Column({ type: DataType.STRING, allowNull: true })
  firstName: string | null

  @ApiProperty({ example: 'Ivanov', description: 'lastname of user' })
  @Column({ type: DataType.STRING, allowNull: true })
  lastName: string | null

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]
}