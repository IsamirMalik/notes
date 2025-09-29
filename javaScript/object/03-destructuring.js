let x;

const firstName = 'john';
const lastName = 'doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
}

x = person.age;

// Destructuring an object
const todo = {
    id: 1,
    title: 'Buy milk',
    completed: false,
    user: {
        name: 'Abdullah',
        age: 20
    }
};

// const {
//     id,
//     title,
//     user: { name },
// } = todo;
const {
    id : todoId,
    title : todoTitle,
    user: { name },
} = todo;

console.log(todoId);

// Destructuring an array
const numbers = [1,2,3,4,5];
const [first , second , ...rest] = numbers; // we can name anything we want ( rest / first / second / third )
console.log(first,second , rest);