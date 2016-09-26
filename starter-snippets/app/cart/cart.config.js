"use strict";

angular.module("cart.config", [])
.config(function($stateProvider){
    $stateProvider
    .state("cart", {
        url: "/cart",
        controller: "CartController",
        templateUrl: 'app/cart/templates/cart.html'
    })
    .state("checkout", {
        url: "/checkout",
        controller: "CheckoutController",
        templateUrl: 'app/cart/templates/checkout.html'
    })
})