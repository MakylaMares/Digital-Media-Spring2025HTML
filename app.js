const user = {
    name: 'Makyla',
    age: 22,
    married: false,
    purchases: ["phone", "laptop", "car"],


    sayName: function() {
        console.log(this);
    }
};

user.sayName();
///Object

const car = {
    type: 'Nissian',
    year: 2013,

    vehicle: function() {
        console.log(this);
    }

};

car.vehicle();
///Object


const person = {
    firstName: 'Matthew',
    grade: 8,
};

console.log(person);
///Object Method


const cat = {
    name: 'Daisy',

    meow: function (){
        console.log("Meow!");
    }
};

cat.meow();
///Object Method


const fruits = [];

fruits.length = 10;
console.log(fruits); 
console.log(Object.keys(fruits)); 
console.log(fruits.length); 
console.log(fruits[8]); 
///Array Method






