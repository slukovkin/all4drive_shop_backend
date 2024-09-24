import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Role } from './roles.model'
import { CreateRolesDto } from './dto/create-roles.dto'

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private readonly roleRepository: typeof Role) {
  }

  async createRole(dto: CreateRolesDto) {
    return this.roleRepository.create(dto)
  }

  async getAllRoles() {
    return await this.roleRepository.findAll()
  }

  async getRoleByValue(value: string) {
    return this.roleRepository.findOne({ where: { value } })
  }
}
