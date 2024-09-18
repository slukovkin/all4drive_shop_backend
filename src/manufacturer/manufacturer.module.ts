import { Module } from '@nestjs/common'
import { ManufacturerController } from './manufacturer.controller'
import { ManufacturerService } from './manufacturer.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Manufacturer } from './manufacturer.model'

@Module({
  imports: [SequelizeModule.forFeature([Manufacturer])],
  controllers: [ManufacturerController],
  providers: [ManufacturerService],
})
export class ManufacturerModule {
}
