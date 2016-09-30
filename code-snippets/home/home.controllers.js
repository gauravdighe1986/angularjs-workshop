angular.module("home.controllers", [])
.controller("HomeController", function($scope){
    $scope.title = 'Home';

    $scope.$emit("pageTitleChanged", "Home");
})