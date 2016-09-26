angular.module("brand.config", [])

.config(function($stateProvider){
    $stateProvider
    .state("brands", {
        abstract: true,
        controller: "BrandLayoutController",
        templateUrl: 'app/brand/templates/brand-layout.html'
    })
    .state("brands.list", {
        url: "/brands",
        controller: "BrandListController",
        templateUrl: 'app/brand/templates/brand-list.html'
    })
    .state("brands.view", {
        url: '/brands/:id',
        controller: 'BrandViewController',
        templateUrl: 'app/brand/templates/brand-view.html'
    })
})