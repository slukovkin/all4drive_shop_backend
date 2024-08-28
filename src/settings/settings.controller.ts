import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { SettingsService } from './settings.service'
import { ISettingCreationAttributes } from './types/types'

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {
  }

  @Get()
  getAll() {
    return this.settingsService.getAll()
  }

  @Post()
  create(@Body() settingDto: ISettingCreationAttributes) {
    return this.settingsService.create(settingDto)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() settingDto: ISettingCreationAttributes) {
    return this.settingsService.update(id, settingDto)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.settingsService.delete(id)
  }
}
