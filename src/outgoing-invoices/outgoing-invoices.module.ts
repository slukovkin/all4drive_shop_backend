import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Order } from '../orders/order.model'
import { OutgoingInvoicesService } from './outgoing-invoices.service'
import { OutgoingInvoicesController } from './outgoing-invoices.controller'
import { OutgoingInvoice } from './outgoing-invoice.model'

@Module({
  imports: [SequelizeModule.forFeature([OutgoingInvoice, Order])],
  providers: [OutgoingInvoicesService],
  controllers: [OutgoingInvoicesController],
})
export class OutgoingInvoicesModule {
}
