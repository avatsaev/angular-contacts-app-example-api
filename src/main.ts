import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {RedisIoAdapter} from './redis-io.adapter';

(async () => {
    const app = await NestFactory.create(AppModule, {cors: true});
    const PORT = process.env.SERVER_PORT || 3000;
    process.env.REDIS_HOST ? app.useWebSocketAdapter(new RedisIoAdapter(app)) : null;
    await app.listen(PORT);
    console.info('SERVER IS RUNNING ON PORT', PORT);
})();