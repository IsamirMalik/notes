// Stored on the Stack ;
const name = 'john';
const age = 30 ;

// Reference values are stored on the heap ;

const person = {
    name : 'Moin',
    age : 25,
}

let newName = name ;
newName = 'Mohsin';

let newPerson = person ;
newPerson.name = 'Abdullah'

console.log(name,newName);
console.log(person,newPerson);