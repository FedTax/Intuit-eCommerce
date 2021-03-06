'use strict';
// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'ui.validate',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        //$httpProvider.defaults.headers.common["Accept"] = "application/json";
        //$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/landing', {templateUrl: 'partials/landing.html', controller: 'LandingCtrl'});
        $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'SettingsCtrl'});
        $routeProvider.when('/storefront', {templateUrl: 'partials/storefront.html', controller: 'StoreFrontCtrl'});
        $routeProvider.when('/shoppingcart', { templateUrl: 'partials/shoppingcart.html', controller: 'ShoppingCartCtrl', resolve: { 'CustomerSvcData': function (CustomerSvc) { return CustomerSvc.promise; } }});
        $routeProvider.otherwise({redirectTo: '/landing'});
    }])
    .run(['InitializerSvc', function(InitializerSvc) {
        InitializerSvc.initialize();
    }]);

