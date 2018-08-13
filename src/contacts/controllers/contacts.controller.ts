import {Body, Controller, Delete, Get, HttpCode, Param, Patch, Post} from '@nestjs/common';
import {ContactsService} from '../services/contacts.service';
import {ContactEntity} from '../entities/contact.entity';

@Controller('contacts')
export class ContactsController {

    constructor(private contactsService: ContactsService) {}

    @Get()
    async index() {
        return this.contactsService.index();
    }

    @Post()
    async create(@Body() contact: ContactEntity) {
        return this.contactsService.create(contact);
    }

    @Patch(':id')
    async update(@Body() contactData: ContactEntity, @Param('id') id) {
        return this.contactsService.update(id, contactData);
    }

    @HttpCode(204)
    @Delete(':id')
    async destroy(@Param('id') id) {
        await this.contactsService.delete(id);
        return;
    }
}
