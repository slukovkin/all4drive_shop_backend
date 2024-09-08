import { Module } from '@nestjs/common'
import { CategoriesService } from './categories.service'
import { CategoriesController } from './categories.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Category } from './category.model'
import { Product } from '../products/products.model'

@Module({
  imports: [SequelizeModule.forFeature([Category, Product])],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {
}
