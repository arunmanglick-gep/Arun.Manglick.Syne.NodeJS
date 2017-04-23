// function add(x,y) {
//     x = x || 0;   // EC5 Style
//     y = y || 0;   // EC5 Style
//     return x+y;
// };

function add(x = 1, y = 5) {
    return x + y;
};

//console.log(add());  // Valid
//console.log(add(2)); // Valid
console.log(add(2, 3));
