import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ManufacturerService } from './manufacturer.service'
import { ManufacturerDto } from './dto/manufacturer.dto'
import { IManufacturer } from './types/manufacturer.interface'

@Controller('manufacturer')
export class ManufacturerController {
  constructor(private readonly manufacturerService: ManufacturerService) {
  }

  @Get()
  getAll() {
    return this.manufacturerService.getAll()
  }

  @Get('/:id')
  getManufacturerById(@Param('id') id: number) {
    return this.manufacturerService.getManufacturerById(id)
  }

  @Post()
  createManufacturer(@Body() manufacturer: ManufacturerDto) {
    return this.manufacturerService.create(manufacturer)
  }

  @Patch('/:id')
  updateManufacturerById(@Param('id') id: number, @Body() manufacturer: IManufacturer) {
    return this.manufacturerService.updateManufacturerById(id, manufacturer)
  }

  @Delete('/:id')
  deleteManufacturerById(@Param('id') id: number) {
    return this.manufacturerService.deleteManufacturerById(id)
  }
}
