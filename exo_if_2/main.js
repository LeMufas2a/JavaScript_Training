// # Les conditions - Exercice 1
// ### 1. Via un console.log() vérifiez l'egalité entre 1 et "1"
// ### 2. Via un console.log() vérifiez l'egalité STRICTE entre 1 et "1"

// ### 3. Créez un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichez une alerte avec comme message " Ton nom est trop court "

// let prenom = prompt("Quel est ton prénom ?");
// if (prenom.length < 5) {
//   alert("ton prénom est trop court");
// } else {
//   alert("c'est carré");
// }

// 4. Affichez une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.

// let math = prompt("1+1");
// if (math == 2) {
//   alert("Bravo");
// } else {
//   alert("raté");
// }

// 5. Affichez une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dites lui à combien d'unités il était de la réponse.
//  ex: si la réponse etait 35 et qu'il répond 40 affichez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"

// let multi = prompt("3*3");
// let temp = Math.abs(multi - 9);

// if (multi == 9) {
//   alert("Bravo");
// } else if (!isNaN(multi)) {
//   alert(
//     "C'est dommage, tu n'étais qu'à " + temp + " unités de la bonne réponse"
//   );
// } else {
//   alert("entrez un nombre");
// }

// 6. Créez un programme qui permet d'ajouter des éléments dans un tableau via des prompts.
// Quand le tableau contient 3 éléments, affichez une alerte avec le contenu du tableau,
// tant que le tableau contient moins de 3 éléments,
// affichez une alerte indiquant combien il manque d'éléments pour être à 3.

let tab = [];
let elem = prompt("Entrez quelque chose");
tab.push(elem);
if (tab.length >= 3) {
  alert(tab);
} else {
  alert(3 - tab.length);
}

// 7. Créez un programme qui permet a l'utilisateur de mettre des chiffres dans des "bacs",
// si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres"
// si il est plus petit que 12 il va dans le bac "petitNombres".
// Affichez ensuite une seule alerte avec le contenu des deux bacs.

let grandsNombres = [];
let petitsNombres = [];
let reponse = prompt("Insérez un nombre");
if (reponse >= 12) {
  grandsNombres.push(reponse);
} else {
  petitsNombres.push(reponse);
}
reponse = prompt("Insérez un nombre");
if (reponse >= 12) {
  grandsNombres.push(reponse);
} else {
  petitsNombres.push(reponse);
}
reponse = prompt("Insérez un nombre");
if (reponse >= 12) {
  grandsNombres.push(reponse);
} else {
  petitsNombres.push(reponse);
}
alert(
  "Grands nombres : " + grandsNombres + " / Petits nombres : " + petitsNombres
);

// 8. Inventez un exercice avec ce que vous avez appris en Javascript jusqu'à maintenant en incluant des conditions.
//  N'hésitez pas à le poster dans #exercices pour le partager aux autres.
