import { Injectable } from '@nestjs/common';
import {ContactEntity} from '../entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {

  constructor(
      @InjectRepository(ContactEntity) private contacts: Repository<ContactEntity>
  ) {}

  async index() {
      return await this.contacts.find();
  }

  async show(id: number){
      return await this.contacts.findOne(id);
  }

  async create(contact: ContactEntity) {
      return await this.contacts.save(contact);
  }

  async update(id: number, contact: Partial<ContactEntity>){
      await this.contacts.update(id, contact);

      return await this.show(id);
  }

  async delete(id){
      return await this.contacts.delete(id);
  }

}
