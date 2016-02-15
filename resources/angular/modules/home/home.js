angular.module('home', ['ui.router', 'ProjectService'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'landing': {
                        templateUrl: 'modules/home/landing.html',
                        controller: 'LandingCtrl'
                    },
                    'projects': {
                        templateUrl: 'modules/home/projects.html',
                        controller: 'ProjectsCtrl'
                    },
                    'about': {
                        templateUrl: 'modules/home/about.html',
                        controller: ''
                    },
                    'contact': {
                        templateUrl: 'modules/home/contact.html',
                        controller: ''
                    },
                    'navbar': {
                        templateUrl: 'partials/navbar.html'
                    }
                }
            });
    })
    .controller('LandingCtrl', function ($scope) {
        $scope.hello = "Hello";

    })
    .controller('ProjectsCtrl', function ($scope, Project) {
        $scope.hello = "Hello";

        Project.getList().then(function (projects) {
            $scope.projects = projects;
        });
    })
    .directive('projectItem', function () {
        return function (scope, element, children) {
            TweenLite.set(".project-item", {perspective:800});
            TweenLite.set(".card", {transformStyle:"preserve-3d"});
            TweenLite.set(".back", {rotationY:-180});
            TweenLite.set([".front", ".back"], {backfaceVisibility:"hidden"});

            element.bind('mouseenter', function (children) {
                TweenLite.to($(this).find('.card'), 1.2, {rotationY:180, ease:Back.easeOut});
            });
            element.bind('mouseleave', function (children) {
                TweenLite.to($(this).find('.card'), 1.2, {rotationY:0, ease:Back.easeOut});
            });
        };
    });