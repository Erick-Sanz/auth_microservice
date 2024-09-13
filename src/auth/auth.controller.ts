import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  ClientProxy,
  MessagePattern,
  Payload,
  RpcException,
} from '@nestjs/microservices';
import { LoginDto } from './dto/login.dto';
import { firstValueFrom } from 'rxjs';
import { NATS_NAME } from 'src/common/services';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(NATS_NAME)
    private readonly nastService: ClientProxy,
  ) {}

  @MessagePattern({ cmd: 'login' })
  async login(@Payload() loginInput: LoginDto) {
    try {
      const user = await firstValueFrom(
        this.nastService.send({ cmd: 'validateUser' }, loginInput),
      );
      const accessToken = await firstValueFrom(
        this.nastService.send(
          { cmd: 'createAccesToken' },
          {
            userId: user._id,
            userName: user.userName,
            userAgent: loginInput.userAgent,
          },
        ),
      );
      user.accessToken = accessToken.token;
      return user;
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
