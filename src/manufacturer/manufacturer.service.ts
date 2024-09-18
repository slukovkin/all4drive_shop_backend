import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Manufacturer } from './manufacturer.model'
import { InjectModel } from '@nestjs/sequelize'
import { ManufacturerDto } from './dto/manufacturer.dto'
import { IManufacturer } from './types/manufacturer.interface'

@Injectable()
export class ManufacturerService {

  constructor(
    @InjectModel(Manufacturer) private manufacturerRepository: typeof Manufacturer,
  ) {
  }

  async create(manufacturer: ManufacturerDto) {
    const candidate = await this.getManufacturerByTitle(manufacturer.title)
    if (candidate) throw new HttpException('Производитель уже есть в БД', HttpStatus.CONFLICT)
    return await this.manufacturerRepository.create(manufacturer)
  }

  async getAll() {
    return await this.manufacturerRepository.findAll({ include: { all: true } })
  }

  async getManufacturerById(id: number) {
    return await this.manufacturerRepository.findOne({ where: { id }, include: { all: true } })
  }

  private async getManufacturerByTitle(title: string) {
    return await this.manufacturerRepository.findOne({ where: { title } })
  }

  async updateManufacturerById(id: number, manufacturer: IManufacturer) {
    return await this.manufacturerRepository.update<Manufacturer>(manufacturer, { where: { id } })
  }

  async deleteManufacturerById(id: number) {
    return await this.manufacturerRepository.destroy({ where: { id } })
  }
}
