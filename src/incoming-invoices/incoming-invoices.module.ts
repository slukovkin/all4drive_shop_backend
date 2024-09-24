import { Module } from '@nestjs/common'
import { IncomingInvoicesService } from './incoming-invoices.service'
import { IncomingInvoicesController } from './incoming-invoices.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Order } from '../orders/order.model'
import { IncomingInvoice } from './incoming-invoice.model'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    SequelizeModule.forFeature([IncomingInvoice, Order]),
    JwtModule],
  providers: [IncomingInvoicesService],
  controllers: [IncomingInvoicesController],
})
export class IncomingInvoicesModule {

}
