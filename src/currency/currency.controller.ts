import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { CurrencyService } from './currency.service'
import { CurrencyDto } from './dto/currency-dto'

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
  create(@Body() currency: CurrencyDto) {
    return this.currencyService.create(currency)
  }

  @Patch('/:id')
  updateCurrencyRateById(@Param('id') id: number, @Body() currency: CurrencyDto) {
    return this.currencyService.updateCurrencyRateById(id, currency)
  }

  @Delete('/:id')
  deleteCurrencyById(@Param('id') id: number) {
    return this.currencyService.deleteCurrencyById(id)
  }
}
