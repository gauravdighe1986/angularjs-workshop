
angular.module("cart.services", [])
.provider("cartService", function() {
    //default one
    this.engine = "SessionStorage";

    console.log("cartService default provider");

    this.$get = function() {
        var storageEngine = null;

        console.log("cartService $get");

        if (this.engine == "SessionStorage")
            storageEngine = new StorageEngine(window.sessionStorage);
        else if (this.engine == "LocalStorage") {
            storageEngine = new StorageEngine(window.localStorage);
        }

        
        return {
            addToCart: function(product) {
                storageEngine.addToCart(product);
            },
            removeFromCart : function(id) {
                storageEngine.removeFromCart(id);
            },
            getProducts : function() {
                return storageEngine.getProducts();
            },

            emptyCart : function() {
                storageEngine.emptyCart();
            }
        }
    }
})
