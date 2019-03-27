import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { config } from './config';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config.database),
    ContactsModule,
  ],
  controllers: [AppController]
})
export class AppModule {}
