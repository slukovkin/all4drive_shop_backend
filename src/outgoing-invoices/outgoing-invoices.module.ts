import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Order } from '../orders/order.model'
import { OutgoingInvoicesService } from './outgoing-invoices.service'
import { OutgoingInvoicesController } from './outgoing-invoices.controller'
import { OutgoingInvoice } from './outgoing-invoice.model'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    SequelizeModule.forFeature([OutgoingInvoice, Order]),
    JwtModule],
  providers: [OutgoingInvoicesService],
  controllers: [OutgoingInvoicesController],
})
export class OutgoingInvoicesModule {
}
