import { Injectable } from '@nestjs/common'
import { Invoice } from './invoice.model'
import { InvoiceCreationDto } from './dto/invoice.dto'
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class InvoicesService {
  constructor(@InjectModel(Invoice) private invoiceRepository: typeof Invoice) {
  }

  async createInvoice(invoice: InvoiceCreationDto) {
    return await this.invoiceRepository.create(invoice)
  }

  async getInvoiceById(id: number) {
    return await this.invoiceRepository.findOne({ where: { id }, include: { all: true } })
  }

  async getAllInvoices() {
    return await this.invoiceRepository.findAll({ include: { all: true } })
  }

  async getLastInvoiceNumber() {
    return await this.invoiceRepository.max('doc_number').then((value: string | null) => {
      if (value) {
        const pref = value.split('-')[0]
        const new_number = (parseInt(value.split('-')[1]) + 1).toString()
        return (pref + '-' + new_number.padStart(7, '0'))
      } else {
        return null
      }
    })
  }

  async updateInvoice(id: number, invoice: InvoiceCreationDto) {
    return await this.invoiceRepository.update(invoice, { where: { id } })
  }

  async deleteInvoice(id: number) {
    return await this.invoiceRepository.destroy({ where: { id } })
  }
}
