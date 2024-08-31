import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Currency } from './currency.model'
import { CurrencyDto } from './dto/currency-dto'

@Injectable()
export class CurrencyService {
  constructor(@InjectModel(Currency) private readonly currencyRepository: typeof Currency) {
  }

  async getAll() {
    return await this.currencyRepository.findAll()
  }

  async getCurrencyByID(id: number) {
    return this.currencyRepository.findOne({ where: { id } })
  }

  private async getCurrencyByCode(code: string) {
    return this.currencyRepository.findOne({ where: { code } })
  }

  async create(currency: CurrencyDto) {
    const isCurrency = this.getCurrencyByCode(currency.code)
    if (isCurrency) throw new HttpException('Валюта с данным кодом уже есть в БД', HttpStatus.CONFLICT)
    return await this.currencyRepository.create(currency)
  }

  async updateCurrencyRateById(id: number, currency: CurrencyDto) {
    return await this.currencyRepository.update<Currency>(currency, { where: { id } })
  }

  async deleteCurrencyById(id: number) {
    return this.currencyRepository.destroy({ where: { id } })
  }
}
