import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Cross } from './cross.model'
import { CrossDto } from './dto/cross.dto'

@Injectable()
export class CrossService {
  constructor(@InjectModel(Cross) private crossRepository: typeof Cross) {
  }

  async create(cross: CrossDto) {
    return await this.crossRepository.create(cross)
  }

  async getAll() {
    return await this.crossRepository.findAll()
  }

  async getAllByCode(code: string) {
    return await this.crossRepository.findAll({ where: { code } })
  }

  async getAllByOrigin(origin: string) {
    return await this.crossRepository.findAll({ where: { origin } })
  }

  async delete(id: number) {
    return await this.crossRepository.destroy({ where: { id } })
  }
}
