import { Injectable } from '@nestjs/common';
import {ContactEntity} from '../entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {ContactsGateway} from '../gateways/contacts.gateway';

@Injectable()
export class ContactsService {

  constructor(
      @InjectRepository(ContactEntity) private contacts: Repository<ContactEntity>,
      private contactsGateway: ContactsGateway
  ) {}

  async index() {
      return await this.contacts.find();
  }

  async show(id: number){
      return await this.contacts.findOne(id);
  }

  async create(contact: ContactEntity) {

      const c = await this.contacts.save(contact);
      this.contactsGateway.contactCreated(c);
      return c;
  }

  async update(id: number, contact: Partial<ContactEntity>){
      await this.contacts.update(id, contact);
      const c = await this.contacts.findOne(id);
      this.contactsGateway.contactUpdated(c);
      return c;
  }

  async delete(id){
      await this.contacts.delete(id);
      this.contactsGateway.contactDeleted(id);
      return;
  }

}
