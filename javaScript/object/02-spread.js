let x;

// const todo = {};
const todo = new Object();

todo.id = 1;
todo.name = 'Buy milk';
todo.completed = false;


x = todo;

const person = {
    address: {
        coords: {
            lat: 23.6756,
            lng: -79.5678,
        },
    },
}

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 };
x = obj3;

const obj4 = { ...obj1, ...obj2 };
x = obj4;

const obj5 = Object.assign({}, obj1, obj2);
x = obj5;

const todos = [
    {
        id: 1,
        name: 'Buy milk',
        completed: false,
    },
    {
        id: 2,
        name: 'Pick up Tom from airport',
        completed: false,
    },
    {
        id: 3,
        name: 'Visit party',
        completed: false,
    },

];

x = todos[0].name;

x = Object.keys(todo);
x = Object.keys(todos[0]);
x = Object.values(todos[1]);
x = Object.entries(todos[2]);

x = Object.keys(todo).length;

x = todo.hasOwnProperty('name');
x = todo.hasOwnProperty('age');

console.log(x);