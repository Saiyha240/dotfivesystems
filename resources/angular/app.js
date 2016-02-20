angular.module('dotfivesApp', [
        'ui.router',
        'restangular',
        'templates',
        'sticky',
        'duScroll',
        'angular-growl',
        'modules'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $interpolateProvider, RestangularProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        RestangularProvider.setBaseUrl("http://dotfives.ph/api/v1/");
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    })
    .config(function (growlProvider) {
        growlProvider.globalTimeToLive(-1);
        growlProvider.globalDisableCountDown(true);
        growlProvider.onlyUniqueMessages(true);
        growlProvider.globalPosition('bottom-right');
    })
    .value('duScrollDuration', 750)
    .value('duScrollOffset', 50);