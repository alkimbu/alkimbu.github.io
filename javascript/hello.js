// alert("Hello world");

// let message = "Hello World";
// alert(message);
// message = "Hallo Welt";
// alert(message);

const LINK_COLOR= "ff0000";
console.log("Link bitte in def Farbe", LINK_COLOR);

let highscore = 520233;
console.log(highscore / 10);

let firstname = "John";
let lastname = 'Smith';
console.log("Name: ", firstname, lastname);

let fullname = 'Jeffrey "The Dude" Lebowski'
console.log(fullname);

let template = `Dein Highscore sind ${highscore} Punkte`;
console.log(template);

let isOver18 = true;
console.log(isOver18);

let age = 19;
console.log("über 18?", age > 18);

let participants = [ "John", "Jane", "Max" ];
console.log(participants);
console.log("Einträge in Array: ", participants.length);
console.log(participants[1]);

let gameHighscore = [2099, 3010, 3333, 5000];
console.log(gameHighscore);

let user = {
    firstname: "John",
    lastname: "Smith",
    age: 25
};

console.log(user);
console.log(user.firstname);
user.highscore = 200;
console.log(user);
user["highscore ever"]= 400;
console.log(user);

let a = 2;
let b = 4;
console.log(a+b);
console.log(b/(a-1));
a++;
console.log(a);

// if-Abfrage

// let myAge = prompt("Wie alt bist du?");
// console.log(`Du bist ${myAge} Jahre alt.`);
// console.log(`über 18? ${myAge} > 18`);

// if (myAge > 18) {
//     console.log("Glückwunsch über 18");
// } else {
//     console.log("Leider unter 18");
// }

// Schleifen: for-Schleife

for (let i=0; i<10; i++) {
    console.log(`Schleife ${i}`);
}

for (let j = 0; j < participants.length; j++) {
    const participant = participants[j];
    console.log(`Teilnehmer*in ${j} ${participant}`);
}

participants.forEach(participant => {
    console.log(`Teilnehmer*in ${participant}`)
});

// Funktionen

function showAge(birthYear) {
    console.log(`Du bist ca. ${2020- birthYear} Jahre alt.`);
}

showAge(1996);
showAge(1990);

function calcAge(birthYear){
    return 2020 - birthYear;
}

console.log(`Max ist ca. ${calcAge(1979)} Jahre alt.`);
console.log(`John ist ca. ${calcAge(1988)} Jahre alt.`);

let birthYears = [ 1964, 1977, 1980, 2001, 2004];
console.log(birthYears);

birthYears.forEach(year => {
    console.log(`Geboren ${year}, heute ca. ${calcAge(year)} Jahre alt.`)
});

let users = [
    { firstname: "John", lastname: "Smith", birthYear: 1969},
    { firstname: "Jane", lastname: "Doe", birthYear: 1970},
    { firstname: "Max", lastname: "Mustermann", birthYear: 1990},
];

console.log(users);

users.forEach(user => {
    console.log(`${user.firstname} ist oder wird heuer ${calcAge(user.birthYear)} Jahre alt`);
});

let firstParagraph = document.querySelector("#pFirst");
console.log(firstParagraph);
firstParagraph.innerHTML = "Test";