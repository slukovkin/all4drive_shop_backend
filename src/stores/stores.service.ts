import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Store } from './stores.model'
import { StoreCreationAttributes } from './types/types'

@Injectable()
export class StoresService {
  constructor(
    @InjectModel(Store) private readonly storeRepository: typeof Store) {
  }

  async create(store: StoreCreationAttributes) {
    const isStore = await this.getStoreByTitle(store.title)
    if (isStore) throw new HttpException('Магазин уже есть в БД', HttpStatus.CONFLICT)
    return this.storeRepository.create(store)
  }

  async getAllStores() {
    return await this.storeRepository.findAll()
  }

  async getStoreByTitle(title: string) {
    return await this.storeRepository.findOne({ where: { title } })
  }

  async updateStoreById(id: number, store: Store) {
    return await this.storeRepository.update<Store>(store, { where: { id } })
  }

  async deleteStoreById(id: number) {
    return await this.storeRepository.destroy({ where: { id } })
  }
}
