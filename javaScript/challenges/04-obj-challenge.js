const { read } = require("fs");

const library = [
    {
        title: "The Road Ahead",
        author: "Bill Gates",
        status: {
            reading: true,
            own : true,
            read : false,
        },
    },
    {
        title: "Walter Isaacson",
        author: "Steve Jobs",
        status: {
            reading: false,
            own : false,
            read : false,
        },
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        status: {
            reading: false,
            own : true,
            read : false,
        },
    }
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title : firstBook} = library[0];
console.log(firstBook);

const libraryJson = JSON.stringify(library);
console.log(libraryJson);