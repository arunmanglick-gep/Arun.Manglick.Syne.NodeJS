function calculatorService() {
    var add = function (x, y) {
        console.log(x + y);
    };

    var subtract = function (x, y) {
        console.log(x - y);
    };

    // return {
    //     add: add,
    //     subtract: subtract
    // };
    return {
        add,
        subtract
    };
};

var c = calculatorService();
c.add(23, 45);
c.subtract(23, 45);