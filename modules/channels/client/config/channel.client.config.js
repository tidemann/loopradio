'use strict';

// Configuring the Channels module
angular.module('channels').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Channels',
      state: 'channels',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'channels', {
      title: 'List Channels',
      state: 'channels.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'channels', {
      title: 'Create Channels',
      state: 'channels.create',
      roles: ['*']
    });
  }
]);
