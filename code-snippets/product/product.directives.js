angular.module("product.directives", [])

.directive("validateYear", function() {
    return {
        restrict: "A",
        require: 'ngModel',

        link: function(scope, elem, attrs, ngModel) {
            console.log("validate Year");

            ngModel.$validators.validYear = function(modelValue, viewValue) {
                console.log("model ", modelValue, "viewValue", viewValue);

                var value = modelValue || viewValue;

                if (!value) 
                    return false;
                
                try {
                    var intValue = parseInt(value);
                    if (intValue >= 2010 && intValue <= 2016)
                        return true;
                }
                catch(ex) {

                }

                return false;
            }

        }
    }
})

.directive("validateName", function($http, apiEndPoint, $q) {
    return {
        restrict: "A",
        require: "ngModel",

        link: function(scope, elem, attrs, ngModel) {
            ngModel.$asyncValidators.validName = function(modelValue, viewValue) {
                var value = modelValue || viewValue;
                console.log("Async validators");
                console.log("model ", modelValue, "viewValue", viewValue);
                

                return $http.get(apiEndPoint + "/api/products", {params: {name: value}})
                .then(function(response){
                    var products = response.data;
                    if (products.length > 0) {
                        console.log("products.length ", products.length);
                        return $q.reject('exists');
                    }
                    
                    return true;
                }, function(err){
                    return $q.reject("error");
                })
            }
        }
    }
})


.directive("weight", function() {
    return {
        restrict: "A",
        require: "ngModel",

        link: function(scope, elem, attrs, ngModel) {
            ngModel.$parsers.push(function(value){
                value = value || '';
                value = value.toLowerCase();
                return value;
            });

            ngModel.$formatters.push(function(value){
                console.log("formatter for weight");
                value = value || '';
                console.log(value);
                value = value.toLowerCase();
                value = value.replace("kilogram", "kg");
                return value;
            });
        }
    }
})

