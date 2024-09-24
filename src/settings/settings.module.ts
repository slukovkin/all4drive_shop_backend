import { Module } from '@nestjs/common'
import { SettingsController } from './settings.controller'
import { SettingsService } from './settings.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Settings } from './settings.model'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    SequelizeModule.forFeature([Settings]),
    JwtModule],
  controllers: [SettingsController],
  providers: [SettingsService],
})
export class SettingsModule {
}
