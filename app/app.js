'use strict';

/**
 * @ngdoc overview
 * @name mhfApp
 * @description
 * # mhfApp
 *
 * Main module of the application.
 */
angular
    .module('mhfApp', [
        'ui.router',
        'ngRoute',
        'ngMaterial',
        // 'rzModule',
    ]) 

    // Run
    .run(['$rootScope', function ($rootScope) {

    }])
    
    .directive('abtn', function() {
        return {
            templateUrl: 'App.A/views/aButton.html',
            controller: 'AButton',
        };
    })

    .directive('bbtn', function() {
        return {
            templateUrl: 'App.B/views/bButton.html',
            controller: 'BButton',
        };
    })

    .directive('cbtn', function() {
        return {
            templateUrl: 'App.C/views/cButton.html',
            controller: 'CButton',
        };
    });
