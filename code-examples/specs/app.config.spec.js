
describe("App Config Test", function(){
    
    beforeEach(module("productApp"));
    var endPoint;
    
    beforeEach(inject(function(apiEndPoint){
        endPoint = apiEndPoint;
    }))
      
    it("service creation test", function(){
         expect(endPoint).toBe("http://localhost:7070");
    })
})