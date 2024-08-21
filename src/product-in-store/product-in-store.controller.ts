import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { IProductStoreDto } from './dto/productStore.dto'
import { ProductInStoreService } from './product-in-store.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ProductStore } from './product-stores.model'

@ApiTags('Товары в магазине')
@Controller('product_store')
export class ProductInStoreController {
  constructor(
    private readonly productInStoreService: ProductInStoreService,
  ) {
  }

  @ApiOperation({ summary: 'Добавление товара в магазин' })
  @ApiResponse({ status: 200, description: 'Возвращает 1 если Ок или 0 если не удалось добавить' })
  @Post()
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  addProductInStore(@Body() product: IProductStoreDto) {
    return this.productInStoreService.addProductInStore(product)
  }


  @ApiOperation({ summary: 'Получение всех товаров в магазине' })
  @ApiResponse({ status: 200, type: [ProductStore] })
  @Get('/:storeId')
  getAllProductFromStore(@Param('storeId') storeId: number) {
    return this.productInStoreService.getAllProductFromStore(storeId)
  }

  @Get('/search/:productId')
  getProductInStoreById(@Param('productId') productId: number) {
    return this.productInStoreService.getProductInStoreById(productId)
  }

  @Delete('/remove/:productId')
  removeProductFromStore(@Param('productId') productId: number) {
    return this.productInStoreService.removeProductFromStore(productId)
  }
}
