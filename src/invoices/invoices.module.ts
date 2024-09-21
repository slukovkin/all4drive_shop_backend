import { Module } from '@nestjs/common'
import { InvoicesService } from './invoices.service'
import { InvoicesController } from './invoices.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Order } from '../orders/order.model'
import { Invoice } from './invoice.model'

@Module({
  imports: [SequelizeModule.forFeature([Invoice, Order])],
  providers: [InvoicesService],
  controllers: [InvoicesController],
})
export class InvoicesModule {

}
