import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Settings } from './settings.model'
import { ISettingCreationAttributes } from './types/types'

@Injectable()
export class SettingsService {

  constructor(@InjectModel(Settings) private settingsRepository: typeof Settings) {
  }

  async getAll() {
    return await this.settingsRepository.findAll({ include: { all: true } })
  }

  async create(settingDto: ISettingCreationAttributes) {
    return await this.settingsRepository.create(settingDto)
  }

  async update(id: number, settingDto: ISettingCreationAttributes) {
    return await this.settingsRepository.update(settingDto, { where: { id } })
  }

  async delete(id: number) {
    return await this.settingsRepository.destroy({ where: { id } })
  }
}
