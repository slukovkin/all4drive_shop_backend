import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as process from 'node:process'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('API Shop')
    .setDescription('API Shop documentation')
    .setVersion('1.0.0')
    .addTag('ALL4DRIVE')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

bootstrap()