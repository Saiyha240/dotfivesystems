angular.module('ProjectService', ['restangular'])
    .factory('Project', function (Restangular) {
        return Restangular.service("projects");
    });