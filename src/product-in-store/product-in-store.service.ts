import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ProductStore } from './product-stores.model'
import { InjectModel } from '@nestjs/sequelize'
import { IProductStoreDto } from './dto/productStore.dto'

@Injectable()
export class ProductInStoreService {
  constructor(
    @InjectModel(ProductStore) private productStoreRepository: typeof ProductStore,
  ) {
  }

  async changeQuantityProductsInStore(productStoreDto: IProductStoreDto) {
    // Если товара нет на складе, добавляем на склад
    const isStock = await this.getProductInStoreById(productStoreDto.productId)
    if (!isStock) return await this.productStoreRepository.create(productStoreDto)

    // Если товар существует на складе и приходит положительное количество, складываем и обновляем в БД
    if (isStock && productStoreDto.qty > 0) {
      const newQty = isStock.qty + productStoreDto.qty
      return await this.productStoreRepository.update({ ...productStoreDto, qty: newQty },
        { where: { id: isStock.id } })
    }

    // Если товар существует проверяем, что существует товара больше или равно тому, что приходит в запросе.
    // Если приходит отрицательное количество, вычитаем и обновляем в БД
    if (isStock && isStock.qty >= (productStoreDto.qty / -1)) {
      const newQty = isStock.qty - (productStoreDto.qty / -1)
      return await this.productStoreRepository.update({ ...productStoreDto, qty: newQty },
        { where: { id: isStock.id } })
    } else {
      // Если товара меньше на складе, выдаём сообщение о нехватке
      throw new HttpException('Недостаточно товара на складе', HttpStatus.FORBIDDEN)
    }
  }

  async getAllProductFromStore(storeId: number = 1) {
    return await this.productStoreRepository.findAll({ where: { storeId } })
  }

  async getProductInStoreById(productId: number) {
    return await this.productStoreRepository.findOne({ where: { productId: productId } })
  }

  // async updateQtyInStore(qty: number) {
  //   return this.productStoreRepository.update()
  // }

  async removeProductFromStore(productId: number) {
    return await this.productStoreRepository.destroy({ where: { productId } })
  }
}
