import { ClientProxy, Transport } from '@nestjs/microservices';
import { ClientProxyFactory } from '@nestjs/microservices';
import { QUEUE_NAME, TRANSPORTER, URL_CONNECTION } from '@shared/config/env';

export class RabbitMqFactory {
  constructor() {
    this.connection = null;
  }
  public connect(): ClientProxy {
    if (!this.connection) {
      this.connection = ClientProxyFactory.create({
        transport: Transport[TRANSPORTER] as any,
        options: {
          urls: [URL_CONNECTION],
          queue: QUEUE_NAME,
        },
      });
    }
    return this.connection;
  }
  private connection: ClientProxy | null;
}

export default RabbitMqFactory;
