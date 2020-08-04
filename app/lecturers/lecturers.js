'use strict';

angular.module('myApp.lecturers', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/lecturers', {
            templateUrl: 'lecturers/lecturers.html',
            controller: 'LecturersCtrl'
        });
    }])

    .controller('LecturersCtrl', ['$scope', '$http', function($scope, $httpClient) {
        console.log('Lecturers controller working')

        $httpClient.get("http://localhost:8083/api/v1/rest/Lecturer/lecturers").then(function (response) {
            console.log(response);

            $scope.arrRec = response.data;
            console.log($scope.arrRec);

            $scope.table.title = "1";
            $scope.name = "2";
            $scope.surname = "3";
            $scope.description = "4";
            }).catch(function (error) {
                console.log(error)

        })
    }]);
