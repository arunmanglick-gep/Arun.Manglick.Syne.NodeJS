// var x = 10;
// var x = "ABC";

// console.log(x);

// var x = 1;
// console.log("Before: " + x);

// for (var x = 0; x < 10; x++) {
//     console.log(x);
// };

// console.log("After: " + x);

// let x = 10;
// let x = "ABC";

// console.log(x);

// var x = 1;
// console.log("Before: " + x);

// for (let x = 0; x < 10; x++) {
//     console.log(x);
// };

// console.log("After: " + x);

// function f(inp) {
//     var x = 20;
//     if(inp)
//     {
//         var x = 200;
//     }
//     return x;
// };

// function f(inp) {
//     let x = 20;
//     if(inp)
//     {
//         let x = 200;
//     }
//     return x;
// };

// console.log(f(false));
// console.log(f(true));

// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     },100*i);
// }

// for (var i = 0; i < 10; i++) {
//     (function(a){
//         setTimeout(function () {
//             console.log(a);
//         },100*a);
//     })(i);
// }

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    },100*i);
}