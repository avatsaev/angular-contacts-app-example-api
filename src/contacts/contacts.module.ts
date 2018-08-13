import { Module } from '@nestjs/common';
import { ContactsController } from './controllers/contacts.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ContactEntity} from './entities/contact.entity';
import {ContactsService} from './services/contacts.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ContactEntity])
  ],
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {}
