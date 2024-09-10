import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { CreateOrderDto } from './dto/order-create.dto'

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {
  }

  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders()
  }

  @Get('/:id')
  getOrderById(@Param('id') id: number) {
    return this.ordersService.getOrderById(id)
  }

  @Post()
  createOrder(@Body() orderDto: CreateOrderDto) {
    return this.ordersService.createOrder(orderDto)
  }

  @Patch('/:id')
  updateOrderById(@Param('id') id: number, @Body() order: CreateOrderDto) {
    return this.ordersService.updateOrderById(id, order)
  }

  @Delete('/:id')
  deleteOrderById(@Param('id') id: number) {
    return this.ordersService.deleteOrderById(id)
  }
}
