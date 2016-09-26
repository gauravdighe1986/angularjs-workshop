"use strict";

angular.module("cart.services", [])
.provider("cartService", function(){
    this.storageEngine = 'Session';

    this.$get = function() {

    }
})