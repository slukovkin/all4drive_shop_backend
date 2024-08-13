import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { RolesService } from './roles.service'
import { CreateRolesDto } from './dto/create-roles.dto'

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {
  }

  @Post()
  createRole(@Body() dto: CreateRolesDto) {
    return this.rolesService.createRole(dto)
  }

  @Get('/:value')
  getRoleByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value)
  }
}
