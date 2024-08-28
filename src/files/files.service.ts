import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Product } from '../products/products.model'

@Injectable()
export class FilesService {

  constructor(@InjectModel(Product) private productRepository: typeof Product) {
  }

  async getImageByFileName(fileName: string) {
    return await this.productRepository.findOne({ where: { imageUrl: fileName } })
  }

  async deleteFileFromStorage(fileName: string) {
    
    console.log(fileName)
  }
}
