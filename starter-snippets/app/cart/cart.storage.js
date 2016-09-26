"use strict";

function SessionStorageEngine() {
    this.addToCart = function(product) {
        window.sessionStorage.setItem("carts.product." + product.id, JSON.stringify(product));
    }

    this.removeFromCart = function(id) {
        window.sessionStorage.removeItem("carts.product." + id);
    }

    this.removeAll = function() {
         
        for(var key in window.sessionStorage) {
            if(key.indexOf("carts.product.") > -1) {
                window.sessionStorage.removeItem(key);
            }
        }
    }

    this.getProducts = function() {
        var products = [];
        for(var key in window.sessionStorage) {
            if(key.indexOf("carts.product.") > -1) {
              products.push(JSON.parse(window.sessionStorage.getItem(key)));
            }
        }

        return products;
    }
}

function LocalStorageEngine() {
    this.addToCart = function(product) {
        window.localStorage.setItem("carts.product." + product.id, JSON.stringify(product));
    }

    this.removeFromCart = function(id) {
        window.localStorage.removeItem("carts.product." + id);
    }

    this.removeAll = function() {
        
        for(var key in window.localStorage) {
            if(key.indexOf("carts.product.") > -1) {
                window.localStorage.removeItem(key);
            }
        }
    }

    this.getProducts = function() {
        var products = [];
        for(var key in window.localStorage) {
            if(key.indexOf("carts.product.") > -1) {
              products.push(JSON.parse(window.localStorage.getItem(key)));
            }
        }

        return products;
    }
}