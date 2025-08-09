import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

  // Porta que a plataforma define
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;

  // Servir /uploads como /files
  app.useStaticAssets(join(__dirname, '..', 'uploads'), { prefix: '/files' });

  await app.listen(port, '0.0.0.0');
}
bootstrap();
