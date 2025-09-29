// https://api.github.com/users


// keys also must have double quotes


const post = {
    id: 1,
    title: 'My first post',
    body: 'This is my first post body',
    author: 'Abdullah'
}

// Convert to JSON string
const jsonString = JSON.stringify(post);

console.log(jsonString.id); // X we need to parse it first 

// Parse JSON
const parsedJson = JSON.parse(jsonString);
console.log(parsedJson.id);


const posts = [
    {
        id: 1,
        title: 'My first post',
        body: 'This is my first post body',
        author: 'Abdullah'
    },

    {
        id: 2,
        title: 'My second post',
        body: 'This is my second post body',
        author: 'Umar'
    },
    {
        id: 3,
        title: 'My third post',
        body: 'This is my third post body',
        author: 'Amir'
    },
    {
        id: 4,
        title: 'My fourth post',
        body: 'This is my fourth post body',
        author: 'Sajid'
    }
];

const str = JSON.stringify(posts);

console.log(str);