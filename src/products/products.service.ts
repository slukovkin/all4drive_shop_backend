import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { IProductUpdateAttributes } from './types/types'
import { InjectModel } from '@nestjs/sequelize'
import { Product } from './products.model'

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product) private productRepository: typeof Product) {
  }


  async create(productDto: CreateProductDto) {
    const candidate = await this.getProductByCode(productDto.code)
    if (candidate) throw new HttpException('Товар уже есть в БД', HttpStatus.CONFLICT)
    const crossCode = Number(productDto.code.toString().slice(0, 5))
    return await this.productRepository.create({ ...productDto, cross: crossCode })
  }

  async getAllProduct() {
    return await this.productRepository.findAll()
  }

  async getProductById(id: number) {
    return await this.productRepository.findOne({ where: { id } })
  }

  async getProductByCode(code: number) {
    return await this.productRepository.findOne({ where: { code } })
  }

  async updateProductById(id: number, product: IProductUpdateAttributes) {
    return await this.productRepository.update<Product>(product, { where: { id } })
  }

  async deleteProductById(id: number) {
    return await this.productRepository.destroy({ where: { id: id } })
  }
}
