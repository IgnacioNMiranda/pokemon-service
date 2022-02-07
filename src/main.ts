import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';
import { INestApplication } from '@nestjs/common';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors({
    origin: ['http://localhost:3000'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    preflightContinue: false,
  });
  app.setGlobalPrefix('pokemon-service');

  swagger('/pokemon-service/docs', app);

  await app.listen(process.env.PORT);
}

function swagger(path: string, app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Pokemon Service')
    .setDescription('Descripción de la API')
    .setVersion('1.0')
    .addTag('pokemon-service')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.use(
    path,
    basicAuth({
      challenge: true,
      users: {
        admin: process.env.SWAGGER_ADMIN_PASSWORD,
      },
    }),
  );
  SwaggerModule.setup(path, app, document);
}

bootstrap();
