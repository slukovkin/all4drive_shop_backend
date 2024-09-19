import { Module } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { OrdersController } from './orders.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Order } from './order.model'
import { User } from '../users/users.model'

@Module({
  imports: [SequelizeModule.forFeature([Order, User])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {
}
