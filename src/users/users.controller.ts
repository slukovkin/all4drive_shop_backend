import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from './users.model'

@ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {
  }

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  createNewUser(@Body() dto: CreateUserDto) {
    return this.usersService.createNewUser(dto)
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAllUser() {
    return this.usersService.getAllUsers()
  }

  @ApiOperation({ summary: 'get user by id' })
  @ApiResponse({ status: 200, type: User })
  @Get('/:id')
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(id)
  }

}
