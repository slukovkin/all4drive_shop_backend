import { Module } from '@nestjs/common'
import { RolesService } from './roles.service'
import { RolesController } from './roles.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Role } from './roles.model'
import { User } from '../users/users.model'
import { UserRoles } from './user-roles.model'
import { JwtModule } from '@nestjs/jwt'

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles]),
    JwtModule],
  exports: [RolesService],
})
export class RolesModule {
}
