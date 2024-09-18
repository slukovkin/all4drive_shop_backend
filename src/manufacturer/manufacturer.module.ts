import { Module } from '@nestjs/common'
import { ManufacturerController } from './manufacturer.controller'
import { ManufacturerService } from './manufacturer.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Manufacturer } from './manufacturer.model'
import { Country } from '../country/country.model'

@Module({
  imports: [SequelizeModule.forFeature([Manufacturer, Country])],
  controllers: [ManufacturerController],
  providers: [ManufacturerService],
})
export class ManufacturerModule {
}
