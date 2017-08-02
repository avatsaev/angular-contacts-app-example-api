'use strict';

module.exports = function(group) {

  group.validatesPresenceOf('name');
  group.validatesUniquenessOf('name', {message: 'name is not unique'});

};
