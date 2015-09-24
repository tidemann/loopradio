'use strict';

// Setting up route
angular.module('channels').config(['$stateProvider',
    function($stateProvider) {
        // Articles state routing
        $stateProvider
            .state('channels', {
                abstract: true,
                url: '/channels',
                template: '<ui-view/>'
            })
            .state('channels.list', {
                url: '',
                templateUrl: 'modules/channels/client/views/list-channels.client.view.html'
            })
            .state('channels.create', {
                url: '/create',
                templateUrl: 'modules/channels/client/views/create-channel.client.view.html',
                controller: 'ChannelsController'
                    // data: {
                    //   roles: ['user', 'admin']
                    // }
            })
            .state('channels.view', {
                url: '/:channelId',
                templateUrl: 'modules/channels/client/views/view-channel.client.view.html'
            })
            .state('channels.edit', {
                url: '/:channelId/edit',
                templateUrl: 'modules/channels/client/views/edit-channel.client.view.html',
                data: {
                    roles: ['user', 'admin']
                }
            });
    }
]);
