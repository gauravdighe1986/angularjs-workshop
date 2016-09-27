function calc (op, a, b) {
    switch(op) {
        case '+' : return a + b;
        case '-' : return a - b;
        case '*' : return a * b;
        case '/' : return a / b;
        case '%' : return a % b;
    }

    throw new Error("not supported");
}

describe("math tests", function(){
    it("add test", function(){
        expect(calc('+', 1, 2)).toBe(3);
    })
})