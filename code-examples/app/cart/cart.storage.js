function StorageEngine(storage) {
    this.addToCart = function(product) {
        var key = "product." + product.id;
        var itemJson = storage.getItem(key);
      
        if (itemJson) {
            var item = JSON.parse(itemJson);
            item.quantity += 1;
             storage.setItem("product." + product.id, JSON.stringify(item));
        } else {
            var item = {
                id: product.id,
                name: product.name,
                quantity: 1
            }

             storage.setItem("product." + product.id, JSON.stringify(item));
        }       
    }

    this.removeFromCart = function(id) {
        console.log("to rmeove ", id);
        storage.removeItem("product." + id);
    }

    
    this.getProducts = function() {
        var products = [];
        for(var key in storage) {
            if (key.indexOf("product.") > -1) {
                products.push(JSON.parse(storage.getItem(key)));
            }
        }
        return products;
    }

 

    this.emptyCart = function() {
         for(var key in storage) {
            if (key.indexOf("product.") > -1) {
                storage.removeItem(key);
            }
        }
    }
}
