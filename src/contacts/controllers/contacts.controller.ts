import {Controller} from '@nestjs/common';
import {ContactsService} from '../services/contacts.service';
import {ContactEntity} from '../entities/contact.entity';
import { Crud } from '@nestjsx/crud';

@Crud(ContactEntity)
@Controller('contacts')
export class ContactsController {

    constructor(public readonly service: ContactsService) {}
}
