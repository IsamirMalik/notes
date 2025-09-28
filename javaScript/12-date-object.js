let x ;

let d = new Date();

x = d.toString();

x = d.getTime();
x = d.getDate();

x = d.getFullYear();

x = d.getMonth();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = d.getTimezoneOffset();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-IN').format(d);

x = Intl.DateTimeFormat('defualt').format(d);

x = Intl.DateTimeFormat('defualt',{month : 'long'}).format(d);

x = Intl.DateTimeFormat('defualt',{weekday : 'long'}).format(d);

x = Intl.DateTimeFormat('defualt',{day : 'numeric'}).format(d);

x = Intl.DateTimeFormat('defualt',{month : 'numeric'}).format(d);

x = Intl.DateTimeFormat('defualt',{year : 'numeric'}).format(d);

x = d.toLocaleString('defualt',{month : 'short'});

// Recommended
x = d.toLocaleString('default' , {
    weekday : 'long',
    year : 'numeric',
    month : 'long',
    day : 'numeric',
    hour : 'numeric',
    minute : 'numeric',
    second : 'numeric', 
    timeZoneName : 'short'
})

console.log(x);

