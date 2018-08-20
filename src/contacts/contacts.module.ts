import { Module } from '@nestjs/common';
import { ContactsController } from './controllers/contacts.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ContactEntity} from './entities/contact.entity';
import {ContactsService} from './services/contacts.service';
import {ContactsGateway} from './gateways/contacts.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContactEntity])
  ],
  providers: [ContactsService, ContactsGateway],
  controllers: [ContactsController]
})
export class ContactsModule {}
