import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { OutgoingInvoicesService } from './outgoing-invoices.service'
import { InvoiceCreationDto } from './dto/outgoing-invoice.dto'


@Controller('outgoing')
export class OutgoingInvoicesController {
  constructor(private readonly outgoingInvoicesService: OutgoingInvoicesService) {
  }

  @Get()
  getAllInvoices() {
    return this.outgoingInvoicesService.getAllInvoices()
  }

  @Get('/last')
  getLastInvoiceNumber() {
    return this.outgoingInvoicesService.getLastInvoiceNumber()
  }

  @Get('/:id')
  getInvoiceById(@Param('id') id: number) {
    return this.outgoingInvoicesService.getInvoiceById(id)
  }

  @Post()
  createInvoice(@Body() invoice: InvoiceCreationDto) {
    return this.outgoingInvoicesService.createInvoice(invoice)
  }

  @Patch('/:id')
  updateInvoiceById(@Param('id') id: number, @Body() invoice: InvoiceCreationDto) {
    return this.outgoingInvoicesService.updateInvoice(id, invoice)
  }

  @Delete('/:id')
  deleteInvoiceById(@Param('id') id: number) {
    return this.outgoingInvoicesService.deleteInvoice(id)
  }
}
