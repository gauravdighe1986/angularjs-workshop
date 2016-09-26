angular.module("brand.services", [])
.factory("Brand", function($resource, apiEndPoint){
    return $resource(apiEndPoint + "/api/brands/:id", null, {
        update: { 
            method: 'PUT'
        }
    })
})

.service("brandService", function(Brand) {
    
})