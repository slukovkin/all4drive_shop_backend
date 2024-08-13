import { Module } from '@nestjs/common'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Product } from './products.model'
import { Store } from '../stores/stores.model'
import { ProductStore } from '../stores/product-stores.model'

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [SequelizeModule.forFeature([Product, Store, ProductStore])],
})
export class ProductsModule {
}
