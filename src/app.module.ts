import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import * as process from 'node:process'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './users/users.model'
import { RolesModule } from './roles/roles.module'
import { Role } from './roles/roles.model'
import { UserRoles } from './roles/user-roles.model'
import { AuthModule } from './auth/auth.module'
import { ProductsModule } from './products/products.module'
import { StoresModule } from './stores/stores.module'
import { Product } from './products/products.model'
import { Store } from './stores/stores.model'
import { ProductStore } from './product-in-store/product-stores.model'
import { ProductInStoreModule } from './product-in-store/product-in-store.module'
import { CustomerModule } from './customer/customer.module'
import { Customer } from './customer/customer.model'
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      { envFilePath: `.${process.env.NODE_ENV}.env` },
    ),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [User, Role, UserRoles, Product, Store, ProductStore, Customer],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    ProductsModule,
    StoresModule,
    ProductInStoreModule,
    CustomerModule,
    UploadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
