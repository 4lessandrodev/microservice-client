import { Module } from '@nestjs/common';
import RabbitMqFactory from './connection.factory';

@Module({
  providers: [RabbitMqFactory],
  exports: [RabbitMqFactory],
})
export class Broker {}
