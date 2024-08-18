import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto'
import { ProductUpdateAttributes } from './types/types'

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Post()
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

  @Patch('/:id')
  updateProductById(@Param('id') id: number, @Body() product: ProductUpdateAttributes) {
    return this.productsService.updateProductById(+id, product)
  }

  @Delete('/:id')
  deleteProductById(@Param('id') id: number) {
    return this.productsService.deleteProductById(id)
  }
}
