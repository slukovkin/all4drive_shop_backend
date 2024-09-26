import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { ConfigModule } from '@nestjs/config'
import { TelegramService } from './telegram.service'
import { TelegramController } from './telegram.controller'

@Module({
  imports: [
    HttpModule, // Импортируем HttpModule для использования HttpService
    ConfigModule, // Импортируем ConfigModule для доступа к переменным окружения
  ],
  controllers: [TelegramController],
  providers: [TelegramService],
  exports: [TelegramService], // Экспортируем сервис для использования в других модулях
})
export class TelegramModule {
}
