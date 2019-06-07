import {Controller} from '@nestjs/common';
import {ContactsService} from '../services/contacts.service';
import {ContactEntity} from '../entities/contact.entity';
import { Crud } from '@nestjsx/crud';

@Crud(ContactEntity, {
    routes: {
        deleteOneBase: {
            returnDeleted: true
        }
    }
})
@Controller('contacts')
export class ContactsController {

    constructor(public readonly service: ContactsService) {}
}
