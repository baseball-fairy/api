import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(cookieParser());
  app.enableCors({
    origin: process.env.CORS_ORIGIN ? [process.env.CORS_ORIGIN] : [],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    exposedHeaders: 'Authorization, Content-Type, Accept',
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
