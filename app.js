const name = 'Makyla';

function divider(p1, p2) {
    console.log(p1 / p2);
}

divider(156,128);

function multiplier(x, y = 60) {
    console.log(x +y);
}

multiplier(15)

function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet(name)

const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);


const person2 = {
  firstname: 'John',
  lastname: 'Doe',
};

console.log(person2['lastname']);
