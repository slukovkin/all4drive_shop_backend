import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { OutgoingInvoice } from './outgoing-invoice.model'
import { InvoiceCreationDto } from './dto/outgoing-invoice.dto'

@Injectable()
export class OutgoingInvoicesService {
  constructor(@InjectModel(OutgoingInvoice) private outgoingInvoiceRepository: typeof OutgoingInvoice) {
  }

  async createInvoice(invoice: InvoiceCreationDto) {
    return await this.outgoingInvoiceRepository.create(invoice)
  }

  async getInvoiceById(id: number) {
    return await this.outgoingInvoiceRepository.findOne({ where: { id }, include: { all: true } })
  }

  async getAllInvoices() {
    return await this.outgoingInvoiceRepository.findAll({ include: { all: true } })
  }

  async getLastInvoiceNumber() {
    return await this.outgoingInvoiceRepository.max('doc_number').then((value: string | null) => {
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
    return await this.outgoingInvoiceRepository.update(invoice, { where: { id } })
  }

  async deleteInvoice(id: number) {
    return await this.outgoingInvoiceRepository.destroy({ where: { id } })
  }
}
