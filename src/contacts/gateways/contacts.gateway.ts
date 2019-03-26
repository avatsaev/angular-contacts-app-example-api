import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    WebSocketGateway,
    WebSocketServer
} from '@nestjs/websockets';

import {Contact} from '../models/contact';
import {CONTACTS_ACTIONS} from '../actions/contact.actions';

@WebSocketGateway({
    namespace: '/contacts'
})
export class ContactsGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {

    @WebSocketServer() private server;

    afterInit() {
        console.log('socket initialized');
    }

    handleConnection(client) {
        console.log('client connected');
    }

    handleDisconnect(client) {
        console.log('client disconnected');
    }

    contactCreated(contact: Contact) {
        console.log('CT-GATEWAY: contact created', contact);
        this.server.emit(CONTACTS_ACTIONS.LIVE_CREATED, contact);
    }

    contactUpdated(contact: Contact) {
        console.log('CT-GATEWAY: contact updated', contact);
        this.server.emit(CONTACTS_ACTIONS.LIVE_UPDATED, contact);
    }

    contactDeleted(id: number) {
        console.log('CT-GATEWAY: contact deleted', id);
        this.server.emit(CONTACTS_ACTIONS.LIVE_DELETED, id);
    }
}
