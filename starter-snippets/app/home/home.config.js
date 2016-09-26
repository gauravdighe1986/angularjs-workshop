"use strict";

angular.module("home.config", [])
.config(function($stateProvider){
    $stateProvider
    .state("home", {
        url: "/home",
        controller: "HomeController",
        templateUrl: 'app/templates/home/home.html'
    })
})