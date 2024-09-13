import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { NastModule } from 'src/nast/nast.module';

@Module({
  controllers: [AuthController],
  imports: [NastModule],
})
export class AuthModule {}
