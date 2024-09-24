import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { CreateOrderDto } from './dto/order-create.dto'
import { Roles } from '../decorators/role-auth.decorator'
import { RolesGuard } from '../guards/roles.guard'

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {
  }

  @Get()
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getAllOrders() {
    return this.ordersService.getAllOrders()
  }

  @Get('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getOrderById(@Param('id') id: number) {
    return this.ordersService.getOrderById(id)
  }

  @Post()
  @Roles('ADMIN', 'USER')
  @UseGuards(RolesGuard)
  createOrder(@Body() orderDto: CreateOrderDto) {
    return this.ordersService.createOrder(orderDto)
  }

  @Patch('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  updateOrderById(@Param('id') id: number, @Body() order: CreateOrderDto) {
    return this.ordersService.updateOrderById(id, order)
  }

  @Delete('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  deleteOrderById(@Param('id') id: number) {
    return this.ordersService.deleteOrderById(id)
  }
}
