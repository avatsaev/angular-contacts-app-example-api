import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './core/adapters/redis-io.adapter';
import { config } from './config';

(async () => {
  const app = await NestFactory.create(AppModule, {cors: true});
  const PORT = process.env.SERVER_PORT || 3000;
  if (config.redis.enabled) {
    app.useWebSocketAdapter(new RedisIoAdapter(app));
    console.log('INFO: Redis adapter enabled');
  }
  await app.listen(PORT);
  console.info('SERVER IS RUNNING ON PORT', PORT);
})();
