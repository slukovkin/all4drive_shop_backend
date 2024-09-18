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
      models: [User, Role, UserRoles, Product, Store, ProductStore,
        Customer, Settings, Currency, Category, Order, Manufacturer, Country],
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
