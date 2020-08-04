'use strict';

angular.module('myApp.attendants', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/attendants', {
            templateUrl: 'attendants/attendants.html',
            controller: 'AttendantsCtrl'
        });
    }])

    .controller('AttendantsCtrl', ['$scope', '$http', function($scope, $httpClient) {
        console.log("Attendants controller working")

        $httpClient.get("http://localhost:8083/api/v1/rest/Participant/participants").then(function (response) {
          console.log(response);

          $scope.arrRec = response.data;
          console.log($scope.arrRec);

          $scope.table.title = "1";
          $scope.name = "2";
          $scope.surname = "3";
          $scope.email = "4";


        }).catch(function (error) {
            console.log(error)

        })


    }]);
