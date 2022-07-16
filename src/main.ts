import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main');

  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);

  const port = config.get<number>('PORT');
  await app.listen(port, () => logger.log(`server listening to port: ${port}`));
}
bootstrap();
