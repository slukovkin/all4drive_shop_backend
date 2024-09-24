import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { OutgoingInvoicesService } from './outgoing-invoices.service'
import { InvoiceCreationDto } from './dto/outgoing-invoice.dto'
import { Roles } from '../decorators/role-auth.decorator'
import { RolesGuard } from '../guards/roles.guard'


@Controller('outgoing_invoices')
export class OutgoingInvoicesController {
  constructor(private readonly outgoingInvoicesService: OutgoingInvoicesService) {
  }

  @Get()
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getAllInvoices() {
    return this.outgoingInvoicesService.getAllInvoices()
  }

  @Get('/last')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getLastInvoiceNumber() {
    return this.outgoingInvoicesService.getLastInvoiceNumber()
  }

  @Get('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getInvoiceById(@Param('id') id: number) {
    return this.outgoingInvoicesService.getInvoiceById(id)
  }

  @Post()
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  createInvoice(@Body() invoice: InvoiceCreationDto) {
    return this.outgoingInvoicesService.createInvoice(invoice)
  }

  @Patch('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  updateInvoiceById(@Param('id') id: number, @Body() invoice: InvoiceCreationDto) {
    return this.outgoingInvoicesService.updateInvoice(id, invoice)
  }

  @Delete('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  deleteInvoiceById(@Param('id') id: number) {
    return this.outgoingInvoicesService.deleteInvoice(id)
  }
}
