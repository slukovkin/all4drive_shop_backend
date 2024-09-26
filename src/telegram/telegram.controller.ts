import { Body, Controller, Post } from '@nestjs/common'
import { TelegramService } from './telegram.service'

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {
  }

  /**
   * Эндпоинт для отправки простого сообщения
   * Пример запроса:
   * POST /telegram/send-message
   * {
   *   "message": "Привет, мир!"
   * }
   */
  @Post('send-message')
  async sendMessage(@Body('message') message: string) {
    return this.telegramService.sendMessage(message)
  }

  /**
   * Эндпоинт для отправки сообщения с кнопками
   * Пример запроса:
   * POST /telegram/send-message-with-buttons
   * {
   *   "message": "Выберите опцию:",
   *   "buttons": [
   *     { "text": "Кнопка 1", "callback_data": "button1" },
   *     { "text": "Кнопка 2", "callback_data": "button2" }
   *   ]
   * }
   */
  @Post('send-message-with-buttons')
  async sendMessageWithButtons(
    @Body('message') message: string,
    @Body('buttons') buttons: { text: string; callback_data: string }[],
  ) {
    return this.telegramService.sendMessageWithButtons(message, buttons)
  }
}
