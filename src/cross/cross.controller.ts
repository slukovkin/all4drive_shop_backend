import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { CrossService } from './cross.service'
import { CrossDto } from './dto/cross.dto'

@Controller('cross')
export class CrossController {
  constructor(private readonly crossService: CrossService) {
  }

  @Post()
  create(@Body() cross: CrossDto) {
    return this.crossService.create(cross)
  }

  @Get()
  getAll() {
    return this.crossService.getAll()
  }

  @Get('/code/:code')
  getAllByCode(@Param('code') code: string) {
    return this.crossService.getAllByCode(code)
  }
  
  @Get('/origin/:origin')
  getAllByOrigin(@Param('origin') origin: string) {
    return this.crossService.getAllByOrigin(origin)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.crossService.delete(id)
  }
}
