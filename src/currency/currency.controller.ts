import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { CurrencyService } from './currency.service'
import { CurrencyDto } from './dto/currency-dto'
import { Roles } from '../decorators/role-auth.decorator'
import { RolesGuard } from '../guards/roles.guard'

@Controller('currency')
export class CurrencyController {

  constructor(
    private readonly currencyService: CurrencyService,
  ) {
  }

  @Get()
  getAll() {
    return this.currencyService.getAll()
  }

  @Get('/:id')
  getCurrencyById(@Param('id') id: number) {
    return this.currencyService.getCurrencyByID(id)
  }

  @Post()
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  create(@Body() currency: CurrencyDto) {
    return this.currencyService.create(currency)
  }

  @Patch('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  updateCurrencyRateById(@Param('id') id: number, @Body() currency: CurrencyDto) {
    return this.currencyService.updateCurrencyRateById(id, currency)
  }

  @Delete('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  deleteCurrencyById(@Param('id') id: number) {
    return this.currencyService.deleteCurrencyById(id)
  }
}
