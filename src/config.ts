import { ConnectionOptions } from 'typeorm';

export interface AppConfiguration {
  appPort: number;
  redis?: {
    host: string,
    port: number,
    enabled: boolean | string,
  };
  database: ConnectionOptions;
}

export const config: AppConfiguration = {
  appPort: 3000,
  redis: {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: Number(process.env.REDIS_PORT) || 6379,
    enabled: process.env.REDIS_ENABLED || false
  },
  database: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST         || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USERNAME || 'contacts_db',
    password: process.env.POSTGRES_PASSWORD || 'contacts_db_pass',
    database: process.env.POSTGRES_DB       || 'contacts_db',
    entities: [`${__dirname}/**/entities/*.{js,ts}`],
    synchronize: true,
    replication: process.env.DB_MASTER_URL ? {
      master: {
        url:  process.env.DB_MASTER_URL,
      },
      slaves: process.env.DB_REPLICAS_URL ? [
        {url: process.env.DB_REPLICAS_URL},
      ] : [],
    } : null,
  },
};
