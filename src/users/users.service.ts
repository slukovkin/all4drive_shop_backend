import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './users.model'
import { CreateUserDto } from './dto/create-user.dto'
import { RolesService } from '../roles/roles.service'

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private readonly roleService: RolesService
  ) {
  }

  async createNewUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto)
    const role = await this.roleService.getRoleByValue('USER')
    await user.$set('roles', [role.id])
    return user
  }

  async getAllUsers() {
    return this.userRepository.findAll({ include: { all: true } })
  }

  async getUserById(id: number) {
    return this.userRepository.findOne({ where: { id } })
  }
}
