// - ## Exo 1

/* let multiplicateur = parseInt(prompt("Donne un chiffre"))

for (let i = 1; i < 11; i++) {
    console.log(multiplicateur + " x " + i + " =" + multiplicateur * i);
} */



// - ## Exo 2

/* let multiplicateur = parseInt(prompt("Donne un chiffre"))
for (let i = 1; i < 11; i += 2) {
    console.log(multiplicateur + " x " + i + " =" + multiplicateur * i);
} */

// - ## Exo 3

/* let number = 2

for (let i = 22; i > 0; i -= 2) {
    console.log(i - number);
} */

// - ## Exo 4

/* let classe = [
    "abdel", "amine", "antoine", "ayoub", "bilal", "camille", "cem", "gauthier", "laurie", "mahad", "mufassa", "nghia", "redwane", "salim", "said", "yahya", "yasmina", "yassin"
];

let long = [];

classe.forEach(item => {
    if (item.length > 5) {
        long.push(item)
    }
});
console.log(long);
 */
// - ## Exo 5

/* let sommes =
    [   14,
        7,
        97,
        65,
        247,
        67,
        101,
        4,
        34,
        78,
        1,
        900,
        0,
        11,
        32,
        23,
        61,
    ];

let grossesSommes = [

]

sommes.forEach(item => {

    if (item > 60) {
        grossesSommes.push(item)

    }
}
);
console.log(grossesSommes);
console.log(sommes); */

// Exo 5
/* let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
let grossesSommes = [];
for (let i = sommes.length - 1; i >= 0; i--) {
    if (sommes[i] > 60) {
        grossesSommes.push(sommes.splice(i, 1)[0]);
    }
}
console.log(sommes);
console.log(grossesSommes);
 */

// - ## Exo 6
/* let donnees = [17, 7, 97, {}, "247", 67, 101, true, 34, 78, [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];
let typesString = [];
let typesNumber = [];
let typesObject = [];
let typesAutres = [];

for (let i = donnees.length - 1; i >= 0; i--) {
    let item = donnees.pop();   
    let type = typeof item
    switch (type) {
        case "number":
            typesNumber.push(Number(item));
            break;
        case "string":
            typesString.push(String(item));

            break;
        case "object":
            typesObject.push(Object(item));
            break;
        default:
            typesAutres.push(item);
            break;
    }
}
console.log(typesString);
console.log(typesNumber);
console.log(typesObject);
console.log(typesAutres); */