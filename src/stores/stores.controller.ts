import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { StoresService } from './stores.service'
import { Store } from './stores.model'
import { Roles } from '../decorators/role-auth.decorator'
import { RolesGuard } from '../guards/roles.guard'

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
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getAllStore() {
    return this.storeService.getAllStores()
  }

  @Get('/:title')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getStoreByTitle(@Param('title') title: string) {
    return this.storeService.getStoreByTitle(title)
  }

  @Get('/search/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getStoreById(@Param('id') id: number) {
    return this.storeService.getStoreById(id)
  }

  @Patch('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  updateStoreById(@Param('id') id: string, @Body() store: Store) {
    return this.storeService.updateStoreById(+id, store)
  }

  @Delete('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  deleteStoreById(@Param('id') id: string) {
    return this.storeService.deleteStoreById(+id)
  }
}
