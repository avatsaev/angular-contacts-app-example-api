import {Controller} from '@nestjs/common';
import {ContactsService} from '../services/contacts.service';
import {ContactEntity} from '../entities/contact.entity';
import { Crud } from '@nestjsx/crud';

@Crud(ContactEntity)
@Controller('contacts')
export class ContactsController {

    constructor(public readonly service: ContactsService) {}

    // @Get()
    // async index() {
    //     return await this.contactsService.index();
    // }
    //
    // @Get(':id')
    // async show(@Param('id') id) {
    //     return await this.contactsService.show(id);
    // }
    //
    // @Post()
    // async create(@Body() contact: ContactEntity) {
    //     return await this.contactsService.create(contact);
    // }
    //
    // @Patch(':id')
    // async update(@Body() contactData: ContactEntity, @Param('id') id) {
    //     return await this.contactsService.update(id, contactData);
    // }
    //
    // @HttpCode(204)
    // @Delete(':id')
    // async destroy(@Param('id') id) {
    //     await this.contactsService.delete(id);
    //     return;
    // }
}
