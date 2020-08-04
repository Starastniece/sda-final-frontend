'use strict';

angular.module('myApp.events_list', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/events_list', {
            templateUrl: 'events.list/events_list.html',
            controller: 'EventsListCtrl'
        });
    }])

    .controller('EventsListCtrl', ['$scope', '$http', function($scope, $httpClient) {
        console.log('Events list controller working')

        $httpClient.get("http://localhost:8083/api/v1/rest/Events/events").then(function (response) {
            console.log(response);

            $scope.arrRec = response.data;
            console.log($scope.arrRec);

            $scope.table.title = "1";
            $scope.title = "2";
            $scope.date = "3"
            $scope.lecturers = "4";
            $scope.street = "5";
            $scope.price = "6";
            $scope.duration = "7";

        }).catch(function (error) {
            console.log(error)

        })
    }]);
