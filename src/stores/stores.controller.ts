import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { StoresService } from './stores.service'
import { Store } from './stores.model'

@Controller('stores')
export class StoresController {
  constructor(
    private readonly storeService: StoresService) {
  }

  @Post()
  createStore(@Body() store: Store) {
    return this.storeService.create(store)
  }

  @Get()
  getAllStore() {
    return this.storeService.getAllStores()
  }

  @Get('/:title')
  getStoreByTitle(@Param('title') title: string) {
    return this.storeService.getStoreByTitle(title)
  }

  @Get('/search/:id')
  getStoreById(@Param('id') id: number) {
    return this.storeService.getStoreById(id)
  }

  @Patch('/:id')
  updateStoreById(@Param('id') id: string, @Body() store: Store) {
    return this.storeService.updateStoreById(+id, store)
  }

  @Delete('/:id')
  deleteStoreById(@Param('id') id: string) {
    return this.storeService.deleteStoreById(+id)
  }
}
