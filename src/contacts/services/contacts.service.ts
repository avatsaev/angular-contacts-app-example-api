import { Injectable } from '@nestjs/common';
import {ContactEntity} from '../entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { DeleteOneRouteOptions, FilterParamParsed, UpdateOneRouteOptions } from '@nestjsx/crud';
import { ContactsGateway } from '../gateways/contacts.gateway';
import { DeepPartial } from 'typeorm';

@Injectable()
export class ContactsService extends RepositoryService<ContactEntity> {

  constructor(
    @InjectRepository(ContactEntity) repo,
    private contactsGateway: ContactsGateway
  ) {
    super(repo);
  }

  async createOne(data: ContactEntity, params: FilterParamParsed[]): Promise<ContactEntity> {
    const contact = await super.createOne(data, params);
    this.contactsGateway.contactCreated(contact);
    return contact;
  }

  async updateOne(data: DeepPartial<ContactEntity>, params?: FilterParamParsed[], routeOptions?: UpdateOneRouteOptions): Promise<ContactEntity> {
    const contact = await super.updateOne(data, params, routeOptions);
    this.contactsGateway.contactUpdated(contact);
    return contact;
  }

  async deleteOne(params: FilterParamParsed[], routeOptions?: DeleteOneRouteOptions): Promise<void | ContactEntity> {
    await super.deleteOne(params, routeOptions);
    this.contactsGateway.contactDeleted(params[0].value);
    return undefined;
  }
}
