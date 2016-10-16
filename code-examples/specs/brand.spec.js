
describe('testing brand service', function () {
    console.log("running http backend mock");
    var brandService, $httpBackend;

   beforeEach(module('productApp', function ($provide) {
        $provide.value('apiEndPoint', "http://example.com");
    }));

   
    
   //injection by mock framework, use _serviceName_ to receice referece
   //this is just to preserve module variable scope productService
    beforeEach(inject(function (_$httpBackend_, _brandService_) {
      $httpBackend = _$httpBackend_;

      brandService = _brandService_;
    }));
   
    it('get brands-test', function (done) {
         $httpBackend.expectGET('http://example.com/api/brands').respond([
                {id: 1,  name:'Apple'},
                {id: 2,  name:'Google'},
            ]);
           
        brandService.getBrands().then(function(brands) {
            expect(brands.length).toEqual(2);

             expect(brands).toEqual([
                {id: 1,  name:'Apple'},
                {id: 2,  name:'Google'},
            ]);
             done();
        });

        $httpBackend.flush();
    });

    
    

     it('get brand-test', function (done) {
         $httpBackend.expectGET('http://example.com/api/brands/1').respond(
                {id: 1,   name:'Apple'}
            );

        brandService.getBrand(1).then(function(brand) {
            expect(brand.id).toEqual(1);
            expect(brand.name).toEqual('Apple');
        });

        $httpBackend.flush();
        done();
    });


     it('test brand-not-found', function (done) {
        //respond – {function([status,] data[, headers, statusText]) | function(function(method, url, data, headers)} –

        $httpBackend
            .expectGET('http://example.com/api/brands/1000')
            .respond(function (method, url, data, headers) {
                return [404, {result:false}, {}, 'Not Found'];
            });
            
        brandService.getBrand(1000).then(function(brand) {
            expect(true).toEqual(false);
            done();
        },
        function (err) {
            console.log("rejected with error ");
             expect(true).toEqual(true);
             done();
        }
        );

        $httpBackend.flush();
    });

   
    
});



describe('testing brand service with backendData', function () {
    console.log("running http backend mock");
    var brandService, $httpBackend;
    var brandRequestHandler;

     
   beforeEach(module('productApp', function ($provide) {
        $provide.value('apiEndPoint', "http://example.com");
    }));

 
    beforeEach(inject(function($injector) {
     // Set up the mock http service responses
     $httpBackend = $injector.get('$httpBackend');
     brandService = $injector.get('brandService');

     brandRequestHandler = $httpBackend.when('GET', 
                           'http://example.com/api/brands')
                            .respond([
                                {id: 1, name: 'iPhone', brand:'Apple'},
                                {id: 2, name: 'Nexus', brand:'Google'},
                            ]);
    }));

    it('get brand-test', function () {
         $httpBackend.expectGET('http://example.com/api/brands');
           
        brandService.getBrands().then(function(brands) {
            expect(brands.length).toEqual(2);
        });

        $httpBackend.flush();
    });

    it('get brand', function () {
        brandRequestHandler.respond(200, [
                                {id: 1, name:'Apple'}
                            ]);
         $httpBackend.expectGET('http://example.com/api/brands');
           
        brandService.getBrands().then(function(brands) {
             //to fail test for learning
            //expect(products.length).toEqual(2);
            expect(brands.length).toEqual(1);
        });

        $httpBackend.flush();
    });

  
    it('get brands-server error', function () {
        brandRequestHandler.respond(500, [
                                {}
                            ]);
         $httpBackend.expectGET('http://example.com/api/brands');
           
        brandService.getBrands().then(function(brands) {
            //this should not called, a promise fails
            expect(true).toEqual(false);
        }, function(err){
            expect(true).toBe(true);
        });

        $httpBackend.flush();
    });
 
  
});

/*


//mock a service
describe('OrderController Test', function() {



    beforeEach(module('catalogApp', function ($provide) {
        $provide.value('paymentService', {
                transfer: function(cardInfo, sum){
                    return true;
                }
            });
    }));
 

   var scope, $location, createController;
   
   

   beforeEach(inject(function ($injector, $rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
       
        createController = function() {
            return $controller('OrderController', {
                '$scope': scope
            });
        };
         
    }));

    it('products must be successful', function() {
        var controller = createController();

        scope.orderNow();
        expect(scope.orderSuccess).toBe(true);

        console.log("report to server");
    });

});*/