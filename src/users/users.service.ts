import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './users.model'
import { CreateUserDto } from './dto/create-user.dto'
import { RolesService } from '../roles/roles.service'
import { IUserProfile, IUserResponse } from './types/types'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private readonly roleService: RolesService,
  ) {
  }

  async createNewUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto)
    const role = await this.roleService.getRoleByValue('USER')
    await user.$set('roles', [role.id])
    user.roles = [role]
    return user
  }

  async getAllUsers() {
    return await this.userRepository.findAll({ include: { all: true } })
  }

  async getUserById(id: number) {
    const candidate = await this.userRepository.findOne({ where: { id }, include: { all: true } })
    const user: IUserResponse = {
      id: candidate.id,
      email: candidate.email,
      phone: candidate.phone,
      firstname: candidate.firstname,
      lastname: candidate.lastname,
      roles: candidate.roles[0],
    }
    return user
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email }, include: { all: true } })
  }

  async updateUserById(id: number, user: IUserProfile) {
    const passwordHash = await this.generationPasswordHash(user.password)
    return await this.userRepository.update({ ...user, password: passwordHash }, { where: { id } })
  }

  async deleteUserById(id: number) {
    return await this.userRepository.destroy({ where: { id: id } })
  }


  private async generationPasswordHash(password: string) {
    return await bcrypt.hash(password, 10)
  }
}
