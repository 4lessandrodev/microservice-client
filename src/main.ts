import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import TimeoutInterceptor from '@shared/interceptors/timeout.interceptor';
import HttpExceptionFilter from '@shared/exception-filters/exception.filter';
import { PORT } from '@shared/config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TimeoutInterceptor());

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(PORT);
}
bootstrap();
