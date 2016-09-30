angular.module("app.config", [])
.value("apiEndPoint", "http://localhost:7070")  
.value("settings", {})

.config(function(cartServiceProvider){
    console.log("default engine is ", cartServiceProvider.engine);
    //cartServiceProvider.engine = "Session";
     cartServiceProvider.engine = "LocalStorage";
})

.config(function($stateProvider, $urlRouterProvider){
    /*$stateProvider
    .state("default", {
        url: '',
        template: '<h2>Default Page </h2>'
    })*/

    //$urlRouterProvider.otherwise("/home");
})
.run(function(settings){
    settings.MAX_CART_SIZE = 100;
})