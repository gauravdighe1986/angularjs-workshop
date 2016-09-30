"use strict";
angular.module("auth.config", [])
.config(function($stateProvider){
    $stateProvider
    .state("login", {
        url: "/login",
        templateUrl : "/app/auth/templates/login.html",
        controller : "LoginController"
    })
})