const names = ["Makyla", "Jacky", "Xavier", "Matt", "Christian"];


for(name of names ){
    console.log('Hello there ${name}');
}
///Loop For

for (let i = 0; i < 5; i++) {
    console.log(i);
  }
///Loop For

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
///Loop While

const userlist = document.querySelectorAll(".name-list li");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener('click', function(){
    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(listInput.value);
    newLi.appendChild(liContent);
    userlist,appendChild(newLi);
});

































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






