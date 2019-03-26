import { IoAdapter } from '@nestjs/platform-socket.io';
import {getRedisAdapter} from '../helpers';

const redisAdapter = getRedisAdapter(process.env.REDIS_HOST);

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: any): any {
    console.log('connecting to redis adapter...');
    const server = super.createIOServer(port, options);
    server.adapter(redisAdapter);
    return server;
  }
}
