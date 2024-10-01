import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { IncomingInvoicesService } from './incoming-invoices.service'
import { InvoiceCreationDto } from './dto/invoice.dto'
import { Roles } from '../decorators/role-auth.decorator'
import { RolesGuard } from '../guards/roles.guard'

@Controller('incoming_invoices')
export class IncomingInvoicesController {
  constructor(private readonly invoicesService: IncomingInvoicesService) {
  }

  @Get()
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getAllInvoices() {
    return this.invoicesService.getAllInvoices()
  }

  @Get('/last')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getLastInvoiceNumber() {
    return this.invoicesService.getLastInvoiceNumber()
  }

  @Get('/:id')
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  getInvoiceById(@Param('id') id: number) {
    return this.invoicesService.getInvoiceById(id)
  }

  @Post()
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  createInvoice(@Body() invoice: InvoiceCreationDto) {
    return this.invoicesService.createInvoice(invoice)
  }

  @Patch('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  updateInvoiceById(@Param('id') id: number, @Body() invoice: InvoiceCreationDto) {
    return this.invoicesService.updateInvoice(id, invoice)
  }

  @Delete('/:id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  deleteInvoiceById(@Param('id') id: number) {
    return this.invoicesService.deleteInvoice(id)
  }
}
