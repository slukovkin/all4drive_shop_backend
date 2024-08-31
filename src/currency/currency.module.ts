import { Module } from '@nestjs/common'
import { CurrencyService } from './currency.service'
import { CurrencyController } from './currency.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Currency } from './currency.model'

@Module({
  imports: [SequelizeModule.forFeature([Currency])],
  providers: [CurrencyService],
  controllers: [CurrencyController],
})
export class CurrencyModule {
}

