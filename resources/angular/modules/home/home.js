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
    .controller('ProjectsCtrl', function ($scope, $filter, Project) {
        $scope.hello = "Hello";

        Project.getList().then(function (projects) {
            $scope.projects = projects;
        });

        $scope.formatDate = function (date, format) {
            return $filter('date')(new Date(date), format);
        };
    })
    .directive('projectItem', function () {
        return function (scope, element, children) {
            TweenLite.set(".project-item", {perspective: 800});
            TweenLite.set(".card", {transformStyle: "preserve-3d"});
            TweenLite.set(".back", {rotationY: -180});
            TweenLite.set([".front", ".back"], {backfaceVisibility: "hidden"});

            element.bind('mouseenter', function (children) {
                TweenLite.to($(this).find('.card'), 1.2, {rotationY: 180, ease: Back.easeOut});
            });
            element.bind('mouseleave', function (children) {
                TweenLite.to($(this).find('.card'), 1.2, {rotationY: 0, ease: Back.easeOut});
            });
        };
    }).directive('scrollTo', ['$timeout', function ($timeout) {

    function scroll (settings) {
        return function () {
            var scrollPane = angular.element(settings.container);
            var scrollTo = (typeof settings.scrollTo == "number") ? settings.scrollTo : angular.element(settings.scrollTo);
            var scrollY = (typeof scrollTo == "number") ? scrollTo : scrollTo.offset().top - settings.offset;
            scrollPane.animate({scrollTop : scrollY }, settings.duration, settings.easing, function(){
                if (typeof callback == 'function') { callback.call(this); }
            });
        };
    }

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var settings = angular.extend({
                container: 'html, body',
                scrollTo: angular.element(),
                offset: 0,
                duration: 150,
                easing: 'swing'
            }, attrs);

            element.on('click', function () {
                $timeout(scroll(settings));
            });
        }
    };
}]);