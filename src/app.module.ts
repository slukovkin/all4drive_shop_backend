import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import * as process from 'node:process';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    ConfigModule.forRoot(
      { envFilePath: `.${process.env.NODE_ENV}.env` }
    )],
  controllers: [],
  providers: []
})
export class AppModule {
}
