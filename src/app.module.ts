import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './common/config.module';

@Module({
  imports: [ConfigModule, AuthModule],
})
export class AppModule {}
