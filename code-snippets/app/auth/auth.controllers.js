"use strict";
angular.module("auth.controllers", [])
.controller("LoginController", function($scope, $rootScope, apiEndPoint, $state, authService) {
    $scope.username = "";
    $scope.password = "";

    $scope.login = function() {
    
    authService.login($scope.username, $scope.password)
    .then(function(response) {
         $rootScope.$broadcast("LoggedIn", "User LoggedIn");
         $state.go("home");
    }, function(error){
        console.log("error");
         $scope.error = "invalid username/password";
    })

    /*var data = {
            username: $scope.username,
            password: $scope.password
    }

    $http.post(apiEndPoint + "/api/authenticate",  data).then(function(response){
        console.log("login done ", response.data);
        authService.setToken(response.data.token);
        authService.setIdentity(response.data.identity);
        
        $rootScope.$broadcast("LoggedIn", "User LoggedIn");

        $state.go("home");
    })
    .catch(function(errorResponse){
        console.log("login failed ");
        $scope.error = "invalid username/password";
    })*/
    }
})