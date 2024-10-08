import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { User } from '../users/users.model'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService) {
  }

  async login(userDto: CreateUserDto) {
    const user = await this.validatorUser(userDto)
    return await this.generateToken(user)
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email)
    if (candidate) throw new HttpException('Пользователь уже есть в БД', HttpStatus.CONFLICT)
    const passwordHash = await bcrypt.hash(userDto.password, 10)
    const user = await this.userService.createNewUser({ ...userDto, password: passwordHash })
    return await this.generateToken(user)
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles }
    const token = this.jwtService.sign(payload, { secret: 'all4drive', expiresIn: '24h' })
    return { token: token }
    // {
    //   user: user,
    //   token: token,
    //   // token: `Bearer ${token}`,
    // }
  }

  private async validatorUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email)
    if (user) {
      const passwordEquals = await bcrypt.compare(userDto.password, user.password)
      if (passwordEquals) {
        return user
      }
    }
    throw new UnauthorizedException({ message: 'Некорректный email или пароль' })
  }

  async checkToken(token: string) {
    // const bearer = token.split(' ')[0]
    const verifyToken = token
    if (verifyToken) {
      return await this.jwtService.verifyAsync(verifyToken, { secret: 'all4drive' })
    }
    return null
  }
}