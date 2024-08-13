import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatabaseModule, UsersModule, ConfigModule.forRoot({ envFilePath: '.env' })],
  controllers: [],
  providers: []
})
export class AppModule {
}
