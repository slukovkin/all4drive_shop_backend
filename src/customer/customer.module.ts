import { Module } from '@nestjs/common'
import { CustomerController } from './customer.controller'
import { CustomerService } from './customer.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Customer } from './customer.model'

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
  imports: [SequelizeModule.forFeature([Customer])],
})
export class CustomerModule {
}
