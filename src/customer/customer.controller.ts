import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CustomerService } from './customer.service'
import { ICustomerUpdateAttrs } from './types'
import { CustomerCreationDto } from './dto/create-customer'


@ApiTags('Клиент')
@Controller('customers')
export class CustomerController {

  constructor(
    private readonly customerService: CustomerService,
  ) {
  }

  @Post()
  create(@Body() customerDto: CustomerCreationDto) {
    return this.customerService.createCustomer(customerDto)
  }

  @Get()
  getAllBuyers() {
    return this.customerService.getAllCustomers()
  }

  @Get('/:email')
  getBuyerByEmail(@Param('email') email: string) {
    return this.customerService.getCustomerByEmail(email)
  }

  @Patch('/:id')
  updateProductById(@Param('id') id: number, @Body() customer: ICustomerUpdateAttrs) {
    return this.customerService.updateCustomerById(id, customer)
  }

  @Delete('/:id')
  deleteProductById(@Param('id') id: number) {
    return this.customerService.deleteCustomerById(id)
  }
}
