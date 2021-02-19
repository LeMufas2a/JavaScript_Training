
//  Exo 1

/* let valeur; */

/* do {
    valeur = +prompt("Donne une valeur");
} while (valeur == "")


console.log(typeof valeur);
 */

/* do {
    valeur = parseInt(prompt("Donnez une valeur plus petit que 10"))
} while (valeur > 10);
 */
/* let i = 1;

while (i > 0) {
    console.log(i);
    i++
} */

/* let i = 3;

while (i <= 6) {
    console.log(i);
    i++
} */

/* let i = 0;

while (i <= 20) {
    console.log(i);
    i += 2
} */

// Exo 2

/* let legume = [
    "elias",
    "abdel",
    "yasmina",
    "antoine",
];


let panier = [

];

while (legume.length > 0) {

    panier.push(legume.pop())

}

console.log(panier); */


// Exo 3
/* let enigme = prompt("Qui est le plus beau ")
let rep = "mufasa"
while (enigme !== rep) {
    enigme = prompt("Qui est le plus beau")
}

console.log(enigme); */


// Exo 4 == Exo 3 

/* let enigme;
let rep = "mufasa"
do {
    enigme = prompt("Qui est le plus beau ")
} while (enigme !== rep);
 */

//  Exo 5
/* 
let annee = 2021
let i = 0;
let quest;
let randomYear = Math.round(Math.random() * (2018 - 1970) + 1970)
console.log(randomYear);


do {
    quest = prompt("Si je suis née en " + randomYear + " , quel âge aurais-je en " + annee)
    i++

    if (quest == (annee - randomYear)) {
        alert("Vous avez réussi")
        i = 3
    } else {
        alert("il vous reste " + (3 - i) + " essaie")
    }
} while (i < 3);

 */

//  Exo 6

/* let panier = [];
let quest;
let i = 0
let var1;

do {
    quest = prompt("Quel fruit voulez-vous ajouter a votre panier ? ")
    quest.charAt(0).toUpperCase() + quest.slice(1).toLowerCase()
    panier.push(quest)
    i++
} while (i < 8);

if (panier.length == 8) {
    alert(panier)
    var1 = prompt("Quel fruit voulez-vous retirer ? ")

}

while (var1 == panier.indexOf(var1)) {
    panier.splice()
}


console.log(panier);
 */



