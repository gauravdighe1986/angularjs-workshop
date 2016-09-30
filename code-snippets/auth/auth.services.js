"use strict";
angular.module("auth.services", [])
.factory("authService", function(){
    var storage = window.sessionStorage;
    //if token present, user authenticated
    return {
        isAuthenticated : function() {
            return storage.token ? true:false;
        },

        getToken : function() {
            return storage.token;
        },

        setToken: function(token) {
            storage.token = token;
            console.log("token set ", token);
        },

        setIdentity : function(identity) {
            storage.setItem("identity", JSON.stringify(identity));
        },

        getIdentity: function() {
            var identity = storage.getItem("identity");

            return identity ? JSON.parse(identity) : null;
        },

        hasRole: function(name) {
            var identity = this.getIdentity();
            console.log("hasRole ", name, identity);

            if (!identity)
                return false;

            if (identity.role === name) {
                return true;
            }

            return false;
        },

        logout: function() {
            storage.removeItem("token");
            storage.removeItem("identity");

            //TODO: You may clean all the user specific sessions, localStorage here
        }
    }
})