angular.module('home', ['ui.router', 'RestServices'])
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
                        controller: 'ContactCtrl'
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
    .controller('ProjectsCtrl', function ($scope, $filter, Project) {
        $scope.hello = "Hello";

        Project.getList().then(function (projects) {
            $scope.projects = projects;
        });

        $scope.formatDate = function (date, format) {
            return $filter('date')(new Date(date), format);
        };
    })
    .controller('ContactCtrl', function ($scope, $http, growl, Restangular) {
        $scope.sending = false;
        $scope.mailData = {};

        $scope.sendMail = function () {
            $scope.sending = true;

            growl.info("Sending email. Please wait...");

            Restangular.all('mail').customPOST($scope.mailData, 'contact').then(function () {
                $scope.sending = false;
                $scope.mailData = {};
                growl.success("<p>Message inquiry sent! Thanks!</p>", {ttl: 5000});
            }, function (response) {
                $scope.sending = false;
                growl.error("<p>There was an error in sending the inquiry.</p> Please try again later.", {ttl: 5000});
            });
        };

    })
    .directive('projectItem', function () {
        return function (scope, element, children) {
            TweenLite.set(".project-item", {perspective: 800});
            TweenLite.set(".card", {transformStyle: "preserve-3d"});
            TweenLite.set(".back", {rotationY: -180});
            TweenLite.set([".front", ".back"], {backfaceVisibility: "hidden"});

            element.bind('mouseenter', function (children) {
                TweenLite.to(jQuery(this).find('.card'), 1.2, {rotationY: 180, ease: Back.easeOut});
            });
            element.bind('mouseleave', function (children) {
                TweenLite.to(jQuery(this).find('.card'), 1.2, {rotationY: 0, ease: Back.easeOut});
            });
        };
    })
    .directive('pulsingElement', function () {
        return function (scope, element) {
            TweenMax.to(element, 1, {scaleX: 1.4, scaleY: 1.4, repeat: -1, yoyo: true});
        };
    });
