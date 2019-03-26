import * as redisAdapter from 'socket.io-redis';

export const getRedisAdapter = (redisHost?: string, redisPort = 6379) => redisHost ? redisAdapter({
        host: redisHost,
        port: redisPort
    }) : null;
