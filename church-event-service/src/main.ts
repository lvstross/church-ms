import { NestFactory } from '@nestjs/core';
import { EventModule } from './event.module';

async function bootstrap() {
  console.log('Event Service App Init!');
  const app = await NestFactory.create(EventModule);
  await app.listen(3000);
}
bootstrap();
