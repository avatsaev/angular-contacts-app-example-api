import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './core/adapters/redis-io.adapter';
import { config } from './config';

(async () => {
  const app = await NestFactory.create(AppModule, {cors: true});
  if (config.redis.enabled) {
    app.useWebSocketAdapter(new RedisIoAdapter(app));

    console.log('INFO: Redis adapter enabled');
  }
  await app.listen(config.serverPort);
  console.info('SERVER IS RUNNING ON PORT', config.serverPort);
})();
