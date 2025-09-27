// Given an object , we need to print all its keys and values .

let obj = {
    name: 'Abdullah',
    age: 20,
    city: 'Delhi',
    country: 'India',
    state: 'Delhi',
    pincode: 110001,
    phone: 123456789,
    email: 'a@b.com',
    password: '123456',
    confirmPassword: '123456',
    gender: 'Male',
    isMarried: false,
    isStudent: true,
    isWorking: true,

}

function forInLoop(object) {

    for (const key in object) {

        const value = object[key];
        console.log(key,  ":", value);

    }
}

forInLoop(obj)