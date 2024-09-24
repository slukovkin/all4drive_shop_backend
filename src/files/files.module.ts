import { Module } from '@nestjs/common'
import { FilesController } from './files.controller'
import { FilesService } from './files.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Product } from '../products/products.model'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    SequelizeModule.forFeature([Product]),
    JwtModule],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {
}
