import { Injectable, Logger } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'
import * as process from 'node:process'

@Injectable()
export class TelegramService {
  private readonly logger = new Logger(TelegramService.name)
  private readonly botToken: string
  private readonly chatId: string
  private readonly apiUrl: string

  constructor(
    private readonly httpService: HttpService,
  ) {
    this.botToken = process.env.TELEGRAM_BOT_TOKEN
    this.chatId = process.env.TELEGRAM_CHAT_ID
    if (!this.botToken) {
      throw new Error('TELEGRAM_BOT_TOKEN is not defined in environment variables')
    }
    if (!this.chatId) {
      throw new Error('TELEGRAM_CHAT_ID is not defined in environment variables')
    }
    this.apiUrl = `https://api.telegram.org/bot${this.botToken}`
  }

  /**
   * Отправляет текстовое сообщение в Telegram
   * @param message Текст сообщения
   */
  async sendMessage(message: string): Promise<any> {
    const url = `${this.apiUrl}/sendMessage`
    const payload = {
      chat_id: this.chatId,
      text: message,
      parse_mode: 'Markdown', // или 'HTML' в зависимости от форматирования
    }

    try {
      this.logger.log(`Отправка сообщения: "${message}" в чат ID: ${this.chatId}`)
      const response = await firstValueFrom(
        this.httpService.post(url, payload, {
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      )
      this.logger.log(`Сообщение успешно отправлено: ${JSON.stringify(response.data)}`)
      return response.data
    } catch (error) {
      this.logger.error(`Ошибка при отправке сообщения: ${error.message}`)
      throw error
    }
  }

  /**
   * Отправляет сообщение с кнопками (inline keyboard)
   * @param message Текст сообщения
   * @param buttons Массив кнопок
   */
  async sendMessageWithButtons(
    message: string,
    buttons: { text: string; callback_data: string }[],
  ): Promise<any> {
    const url = `${this.apiUrl}/sendMessage`
    const payload = {
      chat_id: this.chatId,
      text: message,
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [buttons],
      },
    }

    try {
      this.logger.log(`Отправка сообщения с кнопками: "${message}" в чат ID: ${this.chatId}`)
      const response = await firstValueFrom(
        this.httpService.post(url, payload, {
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      )
      this.logger.log(`Сообщение с кнопками успешно отправлено: ${JSON.stringify(response.data)}`)
      return response.data
    } catch (error) {
      this.logger.error(`Ошибка при отправке сообщения с кнопками: ${error.message}`)
      throw error
    }
  }
}
