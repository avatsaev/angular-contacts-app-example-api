import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import {TypeOrmModule} from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      logging: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      replication: {
        master: {
          url:  process.env.DB_MASTER_URL,
        },
        slaves: [
          {url: process.env.DB_REPLICAS_URL}
        ]
      }
    }),
    ContactsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
