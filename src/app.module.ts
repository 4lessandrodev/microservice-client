import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Broker } from './rabbitmq/broker.module';

@Module({
  imports: [Broker],
  controllers: [AppController],
})
export class AppModule {}
