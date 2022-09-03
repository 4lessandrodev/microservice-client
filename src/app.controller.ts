import { Controller, Get, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import RabbitMqFactory from './rabbitmq/connection.factory';

@Controller()
export class AppController {
  private readonly broker: ClientProxy;

  constructor(factory: RabbitMqFactory) {
    this.broker = factory.connect();
  }

  @Post('ping')
  async ping() {
    return this.broker.emit('ping', {});
  }

  @Get('pong')
  async pong() {
    return this.broker.send('pong', {});
  }
}
