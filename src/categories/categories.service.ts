import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Category } from './category.model'
import { ICategory, ICategoryCreationAttributes } from './types/types'

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category) {
  }

  async create(category: ICategoryCreationAttributes) {
    return await this.categoryRepository.create(category)
  }

  async getAllCategories() {
    return await this.categoryRepository.findAll()
  }

  async getCategoryById(id: number) {
    return await this.categoryRepository.findOne({ where: { id } })
  }

  async updateCategoryById(id: number, category: ICategory) {
    return await this.categoryRepository.update(category, { where: { id } })
  }

  async deleteCategoryById(id: number) {
    return await this.categoryRepository.destroy({ where: { id } })
  }

}
