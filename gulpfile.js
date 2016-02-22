var elixir = require('laravel-elixir'),
    gulp = require('gulp'),
    del = require('del');

require('laravel-elixir-angular');
require("laravel-elixir-ngtemplatecache");
require('laravel-elixir-imagemin');

var paths = {
    'jquery': 'vendor/jquery/dist',
    'bootstrap': 'vendor/bootstrap/dist',
    'fontawesome': 'vendor/font-awesome',
    'modernizr': 'vendor/modernizr',
    'gsap' : 'vendor/gsap/src/uncompressed',
    'scrollmagic': 'vendor/scrollmagic/scrollmagic/uncompressed',
    'angular': 'vendor/angular',
    'angularuirouter': 'vendor/angular-ui-router/release',
    'lodash': 'vendor/lodash/',
    'restangular': 'vendor/restangular/dist',
    'ngsticky': 'vendor/ngSticky/lib',
    'angularscroll': 'vendor/angular-scroll',
    'angulargrowl': 'vendor/angular-growl-v2/build',
    'angulartics': '/vendor/angulartics/src',
    'googleanalytics': 'vendor/angulartics-google-analytics/lib'
};

elixir.config.images = {
    outputFolder: 'build/img'
};

elixir.extend("remove", function(path) {
    new elixir.Task('remove', function() {
        del(path);
    });
});

elixir(function (mix) {
    mix.imagemin();

    mix.copy('resources/' + paths.bootstrap + '/fonts/bootstrap/**', 'public/build/fonts');
    mix.copy('resources/' + paths.fontawesome + '/fonts/**', 'public/build/fonts');
    mix.copy('resources/assets/fonts/**/**', 'public/build/fonts');

    mix.sass([
            'app.scss'
        ], 'public/css/app.css')
        .styles([
            '../../' + paths.bootstrap + '/css/bootstrap.css',
            '../../' + paths.bootstrap + '/css/bootstrap-theme.css',
            '../../' + paths.fontawesome + '/css/font-awesome.css',
            '../../' + paths.angulargrowl + '/angular-growl.css',
        ], 'public/css/vendor.css');

    mix.copy('resources/' + paths.modernizr + '/src/Modernizr.js', 'public/js');

    mix.scripts([
        '../../' + paths.jquery + '/jquery.js',
        '../../' + paths.angular + '/angular.js',
        '../../' + paths.angularuirouter + '/angular-ui-router.js',
        '../../' + paths.lodash + '/lodash.js',
        '../../' + paths.restangular + '/restangular.js',
        '../../' + paths.bootstrap + '/js/bootstrap.js',
        '../../' + paths.gsap + '/TweenMax.js',
        '../../' + paths.gsap + '/plugins/ScrollToPlugin.js',
        '../../' + paths.scrollmagic + '/ScrollMagic.js',
        '../../' + paths.scrollmagic + '/plugins/animation.gsap.js',
        '../../' + paths.scrollmagic + '/plugins/debug.addIndicators.js',
        '../../' + paths.ngsticky + '/sticky.js',
        '../../' + paths.angularscroll + '/angular-scroll.js',
        '../../' + paths.angulargrowl + '/angular-growl.js',
        '../../' + paths.angulartics + '/angulartics.js',
        '../../' + paths.googleanalytics + '/angulartics-google-analytics.js',
    ], 'public/js/vendor.js');

    mix.ngTemplateCache("/**/*.html", "resources/angular", "resources/angular",{
        templateCache: {
            standalone: true
        },
        htmlmin: {
            collapseWhitespace: true,
            removeComments: true
        }
    }).angular("resources/angular/", "public/js", "app.js");

    mix.version([
        'public/js/app.js',
        'public/js/vendor.js',
        'public/css/app.css',
        'public/css/vendor.css'
    ]);

    mix.remove([
        'resources/angular/templates.js*',
        'public/css',
        'public/js'
    ]);

});
