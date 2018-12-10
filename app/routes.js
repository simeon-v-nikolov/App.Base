'use strict';

/**
 * @ngdoc overview
 * @name mhfApp
 * @description
 * # mhfApp
 *
 * Main module of the application.
 */
angular.module('mhfApp')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('root', {
                url: '/',
                templateUrl: 'App.A/views/aButton.html',
                controller: 'AButton',
            })
        ;
    }])
;
