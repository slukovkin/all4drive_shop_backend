import { Injectable } from '@nestjs/common'
import { IncomingInvoice } from './incoming-invoice.model'
import { InvoiceCreationDto } from './dto/invoice.dto'
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class IncomingInvoicesService {
  constructor(
    @InjectModel(IncomingInvoice) private incomingInvoiceRepository: typeof IncomingInvoice) {
  }

  async createInvoice(invoice: InvoiceCreationDto) {
    return await this.incomingInvoiceRepository.create(invoice)
  }

  async getInvoiceById(id: number) {
    return await this.incomingInvoiceRepository.findOne({ where: { id }, include: { all: true } })
  }

  async getAllInvoices() {
    return await this.incomingInvoiceRepository.findAll({ include: { all: true } })
  }

  async getLastInvoiceNumber() {
    return await this.incomingInvoiceRepository.max('doc_number').then((value: string | null) => {
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
    return await this.incomingInvoiceRepository.update(invoice, { where: { id } })
  }

  async deleteInvoice(id: number) {
    return await this.incomingInvoiceRepository.destroy({ where: { id } })
  }
}
