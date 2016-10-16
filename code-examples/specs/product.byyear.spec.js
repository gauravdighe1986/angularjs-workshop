
describe('byYeat Spec',function(){ //describe your app name

    beforeEach(module("productApp"));

    var byYear;
    beforeEach(inject(function($filter){ //initialize your filter
        byYear = $filter('byYear',{});
    }));

    it('Should return null', function(){  //write tests
        expect(byYear()).toBeUndefined();  
    });


    
    it('Should return same inputs', function(){  //write tests
        expect(byYear([{name:'iphone', id:1, year:2000}]))
        .toEqual([{id: 1, name:'iphone', year:2000}]);  
    });
});

