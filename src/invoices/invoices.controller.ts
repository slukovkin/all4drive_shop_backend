import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { InvoicesService } from './invoices.service'
import { InvoiceCreationDto } from './dto/invoice.dto'

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {
  }

  @Get()
  getAllInvoices() {
    return this.invoicesService.getAllInvoices()
  }

  @Get('/last')
  getLastInvoiceNumber() {
    return this.invoicesService.getLastInvoiceNumber()
  }

  @Get('/:id')
  getInvoiceById(@Param('id') id: number) {
    return this.invoicesService.getInvoiceById(id)
  }

  @Post()
  createInvoice(@Body() invoice: InvoiceCreationDto) {
    return this.invoicesService.createInvoice(invoice)
  }

  @Patch('/:id')
  updateInvoiceById(@Param('id') id: number, @Body() invoice: InvoiceCreationDto) {
    return this.invoicesService.updateInvoice(id, invoice)
  }

  @Delete('/:id')
  deleteInvoiceById(@Param('id') id: number) {
    return this.invoicesService.deleteInvoice(id)
  }
}
