import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateProductDto } from './dto/create-product.dto'
import { IProductUpdateAttributes } from './types/types'
import { Product } from './products.model'
import * as fs from 'node:fs'
import * as path from 'node:path'

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Product) private productRepository: typeof Product) {
  }

  async create(productDto: CreateProductDto) {
    const candidate = await this.getProductByCode(productDto.code)
    if (candidate) throw new HttpException('Товар уже есть в БД', HttpStatus.CONFLICT)
    const crossCode = Number(productDto.code.toString().slice(0, 5))
    return await this.productRepository.create({ ...productDto, cross: crossCode })
  }

  async getAllProduct() {
    return await this.productRepository.findAll({ include: { all: true } })
  }

  async getProductById(id: number) {
    return await this.productRepository.findOne({ where: { id }, include: { all: true } })
  }

  async getProductByCode(code: number) {
    return await this.productRepository.findOne({ where: { code }, include: { all: true } })
  }

  async updateProductById(id: number, product: IProductUpdateAttributes) {
    return await this.productRepository.update<Product>(product, { where: { id } })
  }

  async deleteProductById(id: number) {
    const product = await this.getProductById(id)
    // TODO #2:Переделать удаление изображения товара при удалении товара из БД
    const directory = path.resolve(__dirname, '../..', 'storage')
    const filename = product.imageUrl.split('/')[3]
    fs.unlink(`${directory}/${filename}`, (err) => {
      console.log(err)
    })
    return await this.productRepository.destroy({ where: { id: id } })
  }
}
