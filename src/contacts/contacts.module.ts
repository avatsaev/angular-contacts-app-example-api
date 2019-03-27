import { Module } from '@nestjs/common';

import {TypeOrmModule} from '@nestjs/typeorm';
import { ContactEntity } from './entities/contact.entity';
import { ContactsService } from './services/contacts.service';
import { ContactsGateway } from './gateways/contacts.gateway';
import { ContactsController } from './controllers/contacts.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContactEntity]),
  ],
  providers: [ContactsService, ContactsGateway],
  controllers: [ContactsController]
})
export class ContactsModule {}
