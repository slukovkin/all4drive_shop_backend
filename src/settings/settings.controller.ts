import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { SettingsService } from './settings.service'
import { ISettingCreationAttributes } from './types/types'
import { Roles } from '../decorators/role-auth.decorator'
import { RolesGuard } from '../guards/roles.guard'

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {
  }

  @Get()
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  getAll() {
    return this.settingsService.getAll()
  }

  @Post()
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  create(@Body() settingDto: ISettingCreationAttributes) {
    return this.settingsService.create(settingDto)
  }

  @Patch('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  update(@Param('id') id: number, @Body() settingDto: ISettingCreationAttributes) {
    return this.settingsService.update(id, settingDto)
  }

  @Delete('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  delete(@Param('id') id: number) {
    return this.settingsService.delete(id)
  }
}
