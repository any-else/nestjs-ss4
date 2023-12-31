import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 8000;
  await app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
  });
}
bootstrap();
