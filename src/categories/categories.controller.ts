import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { CategoriesService } from './categories.service'
import { CategoryDto } from './dto/category-create'

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService) {
  }

  @Get()
  getAllCategories() {
    return this.categoriesService.getAllCategories()
  }

  @Get('/:id')
  getCategoryById(@Param('id') id: number) {
    return this.categoriesService.getCategoryById(id)
  }

  @Post()
  createCategory(@Body() category: CategoryDto) {
    return this.categoriesService.create(category)
  }

  @Patch('/:id')
  updateCategoryById(@Param('id') id: number, @Body() category: CategoryDto) {
    return this.categoriesService.updateCategoryById(id, category)
  }

  @Delete('/:id')
  deleteCategoryById(@Param('id') id: number) {
    return this.categoriesService.deleteCategoryById(id)
  }
}
