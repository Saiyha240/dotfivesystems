angular.module('dotfivesApp', [
        'ui.router',
        'restangular',
        'templates',
        'sticky',
        'duScroll',
        'modules'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $interpolateProvider, RestangularProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        RestangularProvider.setBaseUrl("http://dotfives.ph/api/v1/");
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    })
    .value('duScrollDuration', 750)
    .value('duScrollOffset', 50);