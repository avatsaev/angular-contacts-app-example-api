import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, {cors: true});
//   const PORT = process.env.SERVER_PORT || 3000;
//   await app.listen(PORT);
//   console.info('SERVER IS RUNNING ON PORT', PORT);
// }
// bootstrap();

(async () => {
    const app = await NestFactory.create(AppModule, {cors: true});
    const PORT = process.env.SERVER_PORT || 3000;
    await app.listen(PORT);
    console.info('SERVER IS RUNNING ON PORT', PORT);
})();