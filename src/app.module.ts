import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import {TypeOrmModule} from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ContactsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
