import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Observable } from 'rxjs'

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest()
    try {
      const headers = request.headers.authorization
      const bearer = headers.split(' ')[0]
      const token = headers.split(' ')[1]
      if (bearer == 'Bearer' && token) {
        request.user = this.jwtService.verify(token)
        return true
      }

    } catch {
      throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
    }
  }
}