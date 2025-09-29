let x;

const person = {
    name: 'Abdullah',
    age: 20,
    isAdmin: true,
    address: {
        street: '123 main street',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['sports', 'reading', 'coding']
}   

x = person.name;
x = person['age'];
x = person.address.state;
x = person['address']['state'];
x = person.hobbies[1];

person.name = 'Mohsin';
person['age'] = 30;
person.address.city = 'Delhi';
person['address']['state'] = 'Delhi';
person.hobbies[2] = 'playing';

delete person.isAdmin;

person.hasChildren = true;

person.greet = function () {
    console.log(`Hello , my name is ${this.name}`);
}

person.greet();


x = person;
console.log(x);
