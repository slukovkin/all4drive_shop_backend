import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ example: 'email@gmail.com', description: 'email of user' })
  readonly email: string
  @ApiProperty({ example: '1111111', description: 'password of user' })
  readonly password: string
}