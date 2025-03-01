const names = ["Kayla", "Juan", "Josh", "Jess", "Fred", "lucky"];

for(name of names){
    console.log(name);
}

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);

const newH1 = document.createElement("h1");
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

newH1.textContent = "I like Pizza!";

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);


let fruits = ["apple", "orange", "banana"];

fruits.unshift("mango");

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

const person1 = {
    firstName: "Makyla",
    lastName: "Mares",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Makyla!")},
    eat: function(){console.log("I am eating a Mango")},
}

console.log(person1.firstName);
person1.sayHello();
person1.eat();
