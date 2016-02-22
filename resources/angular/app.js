angular.module('dotfivesApp', [
        'ui.router',
        'restangular',
        'templates',
        'sticky',
        'duScroll',
        'angular-growl',
        'angulartics',
        'angulartics.google.analytics',
        'modules'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $interpolateProvider, RestangularProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        RestangularProvider.setBaseUrl("http://dotfivesystems.com/api/v1/");
    })
    .config(function (growlProvider) {
        growlProvider.globalTimeToLive(-1);
        growlProvider.globalDisableCountDown(true);
        growlProvider.onlyUniqueMessages(true);
        growlProvider.globalPosition('bottom-left');
    })
    .value('duScrollDuration', 750)
    .value('duScrollOffset', 50);
