let multiplySimple = function (x, y) {
    return x * y;
};

let multiplySimple = (x, y) => {
    return x * y;
};

let multiply = (x, y) => x * y;

//console.log('Arrow ' + multiply(7, 5));
//------------------------------------------------
function Display(callback) {
    console.log(callback(34, 56));
};

function myFn(a, b) {
    return a + b;
};

Display(myFn);

Display(function (a, b)
  { return a + b; }
);

Display((a, b) => a + b);
