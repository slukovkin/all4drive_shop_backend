import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto'
import { IProductUpdateAttributes } from './types/types'
import { Roles } from '../decorators/role-auth.decorator'
import { RolesGuard } from '../guards/roles.guard'

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Post()
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  create(@Body() productDto: CreateProductDto) {
    return this.productsService.create(productDto)
  }

  @Get()
  getAllProduct() {
    return this.productsService.getAllProduct()
  }

  @Get('/:id')
  getProductById(@Param('id') id: number) {
    return this.productsService.getProductById(id)
  }

  @Get('/search/:code')
  getProductByCode(@Param('code') code: number) {
    return this.productsService.getProductByCode(code)
  }

  @Get('/search/cross/:code')
  getProductByCross(@Param('code') code: string) {
    return this.productsService.getProductByCross(code)
  }

  @Get('/search/origin/:origin')
  getAllProductsByOrigin(@Param('origin') origin: string) {
    return this.productsService.getAllProductsByOrigin(origin)
  }

  @Patch('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  updateProductById(@Param('id') id: number, @Body() product: IProductUpdateAttributes) {
    return this.productsService.updateProductById(id, product)
  }

  @Delete('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  deleteProductById(@Param('id') id: number) {
    return this.productsService.deleteProductById(id)
  }
}
