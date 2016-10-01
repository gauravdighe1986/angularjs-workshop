angular.module("product.config", [])
.config(function($stateProvider){
    $stateProvider
    .state("product", {
        url: "/products",
        abstract: true,
        templateUrl: 'app/product/templates/product-layout.html'
    })
    .state("product.list", {
        url:'/list',
        controller: 'ProductListController',
        templateUrl: 'app/product/templates/product-list.html'
    })

   .state("product.paginate", {
        url:'/paginate',
        controller: 'ProductPaginateController',
        templateUrl: 'app/product/templates/product-paginate.html'
    })

    .state("product.view", {
        url: '/view/:id', //products/view/1
        controller : 'ProductViewController',
        templateUrl: 'app/product/templates/product-view.html'
    })

    .state("product.edit", {
        url: '/edit/:id', //products/edit/1
        

        views : {
            "" : {
                controller : 'ProductEditController',
                templateUrl: 'app/product/templates/product-edit.html'
            },

            "tips": {
                template: '<p>Only Admin can edit</p>'
            }
        }
    })

    .state("product.create", {
        url: '/create', //products/create
       

        views: {
            "" : {
                controller : 'ProductEditController',
                templateUrl: 'app/product/templates/product-edit.html',
            },

            "tips": {
                template: '<p>Only Staff/Admin can create</p>'
            }
        }
    })
})