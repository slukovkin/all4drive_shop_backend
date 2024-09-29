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
import { Manufacturer } from './manufacturer/manufacturer.model'
import { Country } from './country/country.model'
import { ManufacturerModule } from './manufacturer/manufacturer.module'
import { CountryModule } from './country/country.module'
import { EmailModule } from './email/email.module'
import { IncomingInvoicesModule } from './incoming-invoices/incoming-invoices.module'
import { OutgoingInvoicesModule } from './outgoing-invoices/outgoing-invoices.module'
import { OutgoingInvoice } from './outgoing-invoices/outgoing-invoice.model'
import { CrossModule } from './cross/cross.module'
import { IncomingInvoice } from './incoming-invoices/incoming-invoice.model'
import { Cross } from './cross/cross.model'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [
    ConfigModule.forRoot(
      { envFilePath: `.${process.env.NODE_ENV}.env` },
    ),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      models: [User, Role, UserRoles, Product, Store, ProductStore,
        Customer, Settings, Currency, Category, Order, Manufacturer,
        Country, OutgoingInvoice, IncomingInvoice, Cross],
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
    ManufacturerModule,
    CountryModule,
    EmailModule,
    IncomingInvoicesModule,
    OutgoingInvoicesModule,
    CrossModule,
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
