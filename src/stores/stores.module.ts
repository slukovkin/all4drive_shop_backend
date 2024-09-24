import { Module } from '@nestjs/common'
import { StoresController } from './stores.controller'
import { StoresService } from './stores.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Store } from './stores.model'
import { Product } from '../products/products.model'
import { ProductStore } from '../product-in-store/product-stores.model'
import { JwtModule } from '@nestjs/jwt'

@Module({
  controllers: [StoresController],
  providers: [StoresService],
  imports: [
    SequelizeModule.forFeature([Store, Product, ProductStore]),
    JwtModule],
})
export class StoresModule {
}
