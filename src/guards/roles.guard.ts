import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Observable } from 'rxjs'
import { Reflector } from '@nestjs/core'
import { User } from '../users/users.model'
import { ROLE_KEY } from '../decorators/role-auth.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride(ROLE_KEY, [
        context.getHandler(),
        context.getClass(),

      ])

      const request = context.switchToHttp().getRequest()
      const headers = request.headers.authorization
      const bearer = headers.split(' ')[0]
      const token = headers.split(' ')[1]

      if (bearer == 'Bearer' && token) {
        const user: User = this.jwtService.verify(token)
        request.user = user
        return user.roles.some(role => requiredRoles.includes(role.value))
      }

    } catch {
      throw new HttpException('Доступ запрещен', HttpStatus.FORBIDDEN)
    }
  }
}