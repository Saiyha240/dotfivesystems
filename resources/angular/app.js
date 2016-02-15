angular.module('dotfivesApp', [
        'ui.router',
        'restangular',
        'hj.scrollMagic',
        'templates',
        'modules'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $interpolateProvider, RestangularProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        RestangularProvider.setBaseUrl("http://dotfives.ph/api/v1/");
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    })
    .config(['scrollMagicProvider', function (scrollMagicProvider) {

        scrollMagicProvider.addIndicators = true;

    }]);