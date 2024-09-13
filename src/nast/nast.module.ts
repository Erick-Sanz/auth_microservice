import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NATS_NAME } from 'src/common/services';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NATS_NAME,
        transport: Transport.NATS,
        options: {
          servers: process.env.NATS_SERVERS,
        },
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: NATS_NAME,
        transport: Transport.NATS,
        options: {
          servers: process.env.NATS_SERVERS,
        },
      },
    ]),
  ],
})
export class NastModule {}
