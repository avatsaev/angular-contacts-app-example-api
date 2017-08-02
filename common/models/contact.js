'use strict';

module.exports = function(contact) {
  contact.validatesPresenceOf('name');
  contact.validatesUniquenessOf('name', {message: 'name is not unique'});
};
