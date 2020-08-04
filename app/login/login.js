'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', ['$scope', '$http',
        function($scope, $httpClient) {
        console.log("Login's controller working")

            $scope.submit = function () {
            console.log('Participant email: ' + $scope.email);
            console.log('Password: ' + $scope.password);

            $httpClient.get("http://localhost/8083/api/v1/rest/Authorization/authorization(" + $scope.email + ")")
                .then(function (response) {
                    console.log("FIRST RESPONSE === ");
                    console.log(response.data.type);

                    if (response.data.type === "Response") {
                        var cryptedPassResponse = response.data.token + "__" + $scope.password;

                        var authorizationRequestDTO = {
                            email: $scope.email,
                            crypted_token: cryptedPassResponse
                        };

                        var postData = JSON.stringify(authorizationRequestDTO);
                        console.log(postData);

                        $httpClient.post("http://localhost/8083/api/v1/rest/Authorization/authorization/login", postData)
                            .then(function(response) {
                                if(response.data.type === "ERROR") {
                                    alert('AUTHORIZATION FAILED: ' + response.data.message);
                                }
                                document.getElementById("authorization_content").textContent = response.data.secretContent;
                                console.log("Authorization response: ");
                                console.log(response);
                            });
                    }
                    console.log(response);
                    });
                 }


    }]);
