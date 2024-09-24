import { Module } from '@nestjs/common'
import { ProductInStoreController } from './product-in-store.controller'
import { ProductInStoreService } from './product-in-store.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Store } from '../stores/stores.model'
import { Product } from '../products/products.model'
import { ProductStore } from './product-stores.model'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    SequelizeModule.forFeature([Store, Product, ProductStore]),
    JwtModule],
  controllers: [ProductInStoreController],
  providers: [ProductInStoreService],
})
export class ProductInStoreModule {
}
