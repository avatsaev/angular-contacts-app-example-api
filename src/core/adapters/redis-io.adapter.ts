import { IoAdapter } from '@nestjs/platform-socket.io';
import * as redisIoAdapter from 'socket.io-redis';
import { config } from '../../config';

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: any): any {
    const redisAdapter = redisIoAdapter({ host: config.redis.host, port: config.redis.port});
    const server = super.createIOServer(port, options);
    server.adapter(redisAdapter);
    return server;
  }
}
