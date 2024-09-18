import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Country } from './country.model'
import { InjectModel } from '@nestjs/sequelize'
import { CountryDto } from './dto/country.dto'
import { ICountry } from './types/country.interface'

@Injectable()
export class CountryService {

  constructor(
    @InjectModel(Country) private countryRepository: typeof Country,
  ) {
  }

  async createCountry(country: CountryDto) {
    const candidate = await this.getCountryByCode(country.code)
    if (candidate) throw new HttpException('Страна уже есть в БД', HttpStatus.CONFLICT)
    return await this.countryRepository.create(country)
  }

  async getAllCountries() {
    return await this.countryRepository.findAll()
  }

  async getCountryById(id: number) {
    return await this.countryRepository.findOne({ where: { id } })
  }

  private async getCountryByCode(code: number) {
    return await this.countryRepository.findOne({ where: { code } })
  }

  async updateCountryById(id: number, country: ICountry) {
    return await this.countryRepository.update<Country>(country, { where: { id } })
  }

  async deleteCountryById(id: number) {
    return await this.countryRepository.destroy({ where: { id } })
  }
}
