import { Injectable } from '@nestjs/common'
import { EmailDto } from './dto/email.dto'

@Injectable()
export class EmailService {

  // transporter = nodemailer.createTransport({
  //   host: 'smtp.google.com',
  //   port: 587,
  //   secure: false, // true for port 465, false for other ports

  // })

  async sendEmail(email: EmailDto) {
    console.log('Email data => ', email)
    // const info = await this.transporter.sendMail({
    //   from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    //   to: 'bar@example.com, baz@example.com', // list of receivers
    //   subject: 'Hello ✔', // Subject line
    //   text: 'Hello world?', // plain text body
    //   html: '<b>Hello world?</b>', // html body
    // })
    // console.log('Message sent: %s', info.messageId)
  }
}
