import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { IProductStoreDto } from './dto/productStore.dto'
import { ProductInStoreService } from './product-in-store.service'

@Controller('product_store')
export class ProductInStoreController {
  constructor(
    private readonly productInStoreService: ProductInStoreService,
  ) {
  }

  @Post()
  addProductInStore(@Body() product: IProductStoreDto) {
    return this.productInStoreService.addProductInStore(product)
  }

  @Get('/:store')
  getAllProductFromStore(@Param('store') storeId: number) {
    return this.productInStoreService.getAllProductFromStore(storeId)
  }
}
