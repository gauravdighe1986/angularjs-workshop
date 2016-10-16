



describe('ProductController Test', function() {
 
   beforeEach(module('productApp', function ($provide) {
        $provide.value('apiEndPoint', "http://example.com");
    }));


   var scope, $location, createController;
   var productsRequestHandler;
   var $httpBackend;

   beforeEach(inject(function ($injector, $rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
        $httpBackend =  $injector.get('$httpBackend');
        createController = function() {
            return $controller('ProductViewController', {
                '$scope': scope,
                '$stateParams': {id: 1}
            });
        };

        
         productsRequestHandler = $httpBackend.when('GET', 'http://example.com/api/products/1')
                            .respond(
                                {id: 1, name: 'iPhone'}
                            );
    }));

    it('products must have two count', function() {
        var controller = createController();
 
        $httpBackend.flush();

        expect(scope.product.name).toBe("iPhone");
        expect(scope.product.id).toBe(1);
         

        console.log("report to server");
    });

  

});