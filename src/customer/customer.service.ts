import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Customer } from './customer.model'
import { ICustomerCreationAttrs, ICustomerUpdateAttrs } from './types'


@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private readonly customerRepository: typeof Customer,
  ) {
  }

  async createCustomer(customerDto: ICustomerCreationAttrs) {
    const candidate = await this.getCustomerByEmail(customerDto.email)
    if (candidate) throw new HttpException('Клиент уже есть в БД', HttpStatus.CONFLICT)
    return await this.customerRepository.create(customerDto)
  }

  async getAllCustomers() {
    return await this.customerRepository.findAll()
  }

  async getCustomerByEmail(email: string) {
    return await this.customerRepository.findOne({ where: { email } })
  }

  async updateCustomerById(id: number, customer: ICustomerUpdateAttrs) {
    return await this.customerRepository.update<Customer>(customer, { where: { id } })
  }

  async deleteCustomerById(id: number) {
    return await this.customerRepository.destroy({ where: { id: id } })
  }
}
