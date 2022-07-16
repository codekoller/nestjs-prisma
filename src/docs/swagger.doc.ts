import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const swaggerDoc = (app: NestExpressApplication): void => {
  const config = new DocumentBuilder()
    .setTitle('NestJS Prisma Example')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
};
