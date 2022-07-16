import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { swaggerDoc } from './docs/swagger.doc';

async function bootstrap() {
  const logger = new Logger('Main');

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get<ConfigService>(ConfigService);

  swaggerDoc(app);

  const port = config.get<number>('PORT');
  await app.listen(port, () => logger.log(`server listening to port: ${port}`));
}
bootstrap();
