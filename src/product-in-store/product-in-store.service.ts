import { Injectable } from '@nestjs/common'
import { ProductStore } from './product-stores.model'
import { InjectModel } from '@nestjs/sequelize'
import { IProductStoreDto } from './dto/productStore.dto'

@Injectable()
export class ProductInStoreService {
  constructor(
    @InjectModel(ProductStore) private productStoreRepository: typeof ProductStore,
  ) {
  }

  async addProductInStore(productStoreDto: IProductStoreDto) {
    return await this.productStoreRepository.create(productStoreDto)
  }

  async getAllProductFromStore(storeId: number) {
    return await this.productStoreRepository.findAll()
  }

  getProductInStoreById(storeId: number, productId: number) {
  }

  removeProductFromStore(productId: number, storeId: number) {
  }
}
