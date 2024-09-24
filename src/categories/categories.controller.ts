import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { CategoriesService } from './categories.service'
import { CategoryDto } from './dto/category-create'
import { Roles } from '../decorators/role-auth.decorator'
import { RolesGuard } from '../guards/roles.guard'

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
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  createCategory(@Body() category: CategoryDto) {
    return this.categoriesService.create(category)
  }

  @Patch('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  updateCategoryById(@Param('id') id: number, @Body() category: CategoryDto) {
    return this.categoriesService.updateCategoryById(id, category)
  }

  @Delete('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  deleteCategoryById(@Param('id') id: number) {
    return this.categoriesService.deleteCategoryById(id)
  }
}
