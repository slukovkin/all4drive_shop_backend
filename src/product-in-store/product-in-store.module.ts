import { Module } from '@nestjs/common'
import { ProductInStoreController } from './product-in-store.controller'
import { ProductInStoreService } from './product-in-store.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Store } from '../stores/stores.model'
import { Product } from '../products/products.model'
import { ProductStore } from './product-stores.model'

@Module({
  imports: [SequelizeModule.forFeature([Store, Product, ProductStore])],
  controllers: [ProductInStoreController],
  providers: [ProductInStoreService],
  exports: [ProductInStoreService],
})
export class ProductInStoreModule {
}
