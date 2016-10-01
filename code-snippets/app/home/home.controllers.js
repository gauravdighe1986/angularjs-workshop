angular.module("home.controllers", [])

//Enable /delayed api, this page is unblanced, load brands or products first, then load another later
.controller("HomeController", function($scope, $rootScope, Product, brandService, $http, apiEndPoint, $q){

     function unbalancedView() {
        Product.query(function(products){
            $scope.products = products;
        })
        
        brandService.getBrands()
        .then(function(brands){
            $scope.brands= brands;
        })

        getStates()
         .then(function(states){
            $scope.states= states;
        })

     }

     function getStates() {
         return $http.get(apiEndPoint + "/api/states")
         .then(function(response){
             return response.data;
         })
     }

     //drawback: callback chain may go deep when more APIs expected
     function byCallbackHell() {
        var startTime = new Date();

        Product.query(function(products){
             brandService.getBrands()
                .then(function(brands){
                      getStates()
                        .then(function(states){
                            var endTime = new Date();
                            var seconds = (endTime.getTime() - startTime.getTime())/1000;
                            console.log("Time Taken in callback ", seconds, "seconds");
                            
                            $scope.products = products;
                            $scope.brands= brands;
                            $scope.states= states;
                        })
                })
        })
     }

     //promise solution
     function byPromiseJoin() {
         var startTime = new Date();
    
            $q.all([
                Product.query().$promise,
                 brandService.getBrands(),
                 getStates()
            ]).then(function(results){
                var endTime = new Date();

                var seconds = (endTime.getTime() - startTime.getTime())/1000;

                console.log("Time Taken in promise ", seconds, "seconds");

                $scope.products = results[0];
                $scope.brands = results[1];
                $scope.states = results[2];
            })
     }



     //when API returns the results on its own time, view is unbalanced
     unbalancedView();
     //Solution one
     //byCallbackHell();

     //byPromiseJoin();

      $scope.$on("$destroy", function(){
        console.log("$destroy HomeController");
    })
})

.controller("HomeResolveController", function($scope, products, brands, states){
    console.log("hhome controller");

    $scope.products = products;
    $scope.brands = brands;
    $scope.states = brands;
    
        
    $scope.$on("$destroy", function(){
        console.log("$destroy HomeResolveController");
    })
        
})