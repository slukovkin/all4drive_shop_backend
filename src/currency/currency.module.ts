import { Module } from '@nestjs/common'
import { CurrencyService } from './currency.service'
import { CurrencyController } from './currency.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Currency } from './currency.model'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    SequelizeModule.forFeature([Currency]),
    JwtModule],
  providers: [CurrencyService],
  controllers: [CurrencyController],
})
export class CurrencyModule {
}

