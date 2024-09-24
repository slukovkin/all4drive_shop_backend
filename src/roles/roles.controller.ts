import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { RolesService } from './roles.service'
import { CreateRolesDto } from './dto/create-roles.dto'
import { Roles } from '../decorators/role-auth.decorator'
import { RolesGuard } from '../guards/roles.guard'

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {
  }

  @Post()
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  createRole(@Body() dto: CreateRolesDto) {
    return this.rolesService.createRole(dto)
  }

  @Get('/:value')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getRoleByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value)
  }
}
