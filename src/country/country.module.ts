import { Module } from '@nestjs/common'
import { CountryController } from './country.controller'
import { CountryService } from './country.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Country } from './country.model'
import { Manufacturer } from '../manufacturer/manufacturer.model'

@Module({
  imports: [SequelizeModule.forFeature([Country, Manufacturer])],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {
}
