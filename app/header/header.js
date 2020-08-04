'use strict';

angular.module('myApp.header', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/header', {
            templateUrl: 'header/header.html',
            controller: 'HeaderCtrl'
        });
    }])

    .controller('HeaderCtrl', [function() {
        console.log("Header controller is working")

    }]);
