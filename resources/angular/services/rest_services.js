angular.module('RestServices', ['restangular'])
    .factory('Project', function (Restangular) {
        return Restangular.service("projects");
    })
    .factory('Mail', function (Restangular) {
        return Restangular.service("mail");
    });