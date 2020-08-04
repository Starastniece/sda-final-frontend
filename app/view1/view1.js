'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$http', function($scope, $httpClient) {
        console.log('Subscribers (View1) controller working')
        $scope.submit = function () {
            var subscriberDTO = {
                email: $scope.email,
            }

            var subscriberCreateRequestDTO = {
                subscriber_dto: subscriberDTO
            };

            var submitData = JSON.stringify(subscriberCreateRequestDTO);
            console.log(subscriberCreateRequestDTO);
            $httpClient.post("http://localhost:8083/api/v1/rest/Subscriber/createSubscriber", submitData)
                .then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                console.log(error);

            })

        }

    }]);
