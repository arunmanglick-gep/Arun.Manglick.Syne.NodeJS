class Person{
    constructor(n){
        this.name = n;
    }

    setName(nm){
        this.name = nm;
    };

    getName(){
        return this.name;
    };
}

var p1 = new Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Person("RK");
console.log(p2.getName());
p2.setName("Sumit");
console.log(p2.getName());