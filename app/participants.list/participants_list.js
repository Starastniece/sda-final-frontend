'use strict';

angular.module('myApp.participants_list', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/participants_list.html', {
            templateUrl: 'participants.list/participants_list.html',
            controller: 'ParticipantsListCtrl'
        });
    }])

    .controller('ParticipantsListCtrl', [function() {
        console.log("Participants list controller at work")
    }]);
