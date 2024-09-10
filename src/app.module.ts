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
import { FilesModule } from './files/files.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { SettingsModule } from './settings/settings.module'
import * as path from 'node:path'
import { Settings } from './settings/settings.model'
import { CurrencyModule } from './currency/currency.module'
import { Currency } from './currency/currency.model'
import { CategoriesModule } from './categories/categories.module'
import { Category } from './categories/category.model'
import { OrdersModule } from './orders/orders.module'
import { Order } from './orders/order.model'

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
      models: [User, Role, UserRoles, Product, Store, ProductStore, Customer, Settings, Currency, Category, Order],
      autoLoadModels: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'storage'),
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    ProductsModule,
    StoresModule,
    ProductInStoreModule,
    CustomerModule,
    FilesModule,
    SettingsModule,
    CurrencyModule,
    CategoriesModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
