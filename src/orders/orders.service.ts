import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Order } from './order.model'
import { CreateOrderDto } from './dto/order-create.dto'

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order) private orderRepository: typeof Order,
  ) {
  }

  async getAllOrders() {
    return await this.orderRepository.findAll({ include: { all: true } })
  }

  async createOrder(order: CreateOrderDto) {
    return await this.orderRepository.create(order)
  }

  async getOrderById(id: number) {
    return await this.orderRepository.findOne({ where: { id }, include: { all: true } })
  }

  async updateOrderById(id: number, order: CreateOrderDto) {
    return await this.orderRepository.update(order, { where: { id } })
  }

  async deleteOrderById(id: number) {
    return await this.orderRepository.destroy({ where: { id } })
  }

}
