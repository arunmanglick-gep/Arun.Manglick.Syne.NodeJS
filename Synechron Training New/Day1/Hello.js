var i = 10;
var j = 20;

console.log("Hello World!");

var sum = i + j;
console.log("Sum is: " + sum);

function log(msg){
    console.log(msg);
};

log("Hi There!");

function Employee() {  
    this.id=1;
    this.name = "Manish";
};

var emp = new Employee();
console.log(emp);
console.log(emp.id);
console.log(emp.name);