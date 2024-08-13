import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import * as process from 'node:process'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './users/users.model'
import { RolesModule } from './roles/roles.module'
import { Role } from './roles/roles.model'
import { UserRoles } from './roles/user-roles.model'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: 'root', // process.env.DATABASE_USERNAME,
      password: '86818682', // process.env.DATABASE_PASSWORD,
      database: 'ermel_db', //process.env.DATABASE_NAME,
      models: [User, Role, UserRoles],
      autoLoadModels: true
    }),
    UsersModule,
    ConfigModule.forRoot(
      { envFilePath: `.${process.env.NODE_ENV}.env` }
    ),
    RolesModule],
  controllers: [],
  providers: []
})
export class AppModule {
}
