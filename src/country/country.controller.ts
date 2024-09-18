import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { CountryService } from './country.service'
import { CountryDto } from './dto/country.dto'
import { ICountry } from './types/country.interface'

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {
  }

  @Get()
  getAllCountries() {
    return this.countryService.getAllCountries()
  }

  @Get('/:id')
  getCountryById(@Param('id') id: number) {
    return this.countryService.getCountryById(id)
  }

  @Post()
  createCountry(@Body() country: CountryDto) {
    return this.countryService.createCountry(country)
  }

  @Patch('/:id')
  updateCountryById(@Param('id') id: number, @Body() country: ICountry) {
    return this.countryService.updateCountryById(id, country)
  }

  @Delete('/:id')
  deleteManufacturerById(@Param('id') id: number) {
    return this.countryService.deleteCountryById(id)
  }
}
