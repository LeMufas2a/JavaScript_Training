/* //  ### 1. let phrase = 'Bonjour tout le monde    '
let phrase = 'Bonjour tout le monde     '

//  ### 2. Afficher la longueur de la phrase 

console.log(phrase.length);

//  ### 3. Enlever l'espace à la fin grâce à une méthode 

phrase = phrase.trim()

//  ### 4. Reafficher la longueur de la phrase 

console.log(phrase.length);

// ### 5. Afficher uniquement la dernière lettre de la phrase 

console.log(phrase.substr(20));

// ### 6. Enlever "Bonjour" de la phrase

let a = phrase.substr(8)

console.log(a);

// ### 7. Remettre "Bonjour" au debut de la phrase grâce à une méthode

a = phrase.replace()

console.log(a);

// 8. Supprimer toute la phrase sauf "Bonjour" grâce à une méthode

a = phrase.substr(0, 7)

console.log(a);

// ### 9. Remplacer dans la phrase le mot "number" par le mot "string" 
a = phrase.replace('Bonjour', 'Number')

console.log(a);

// ### 10. Bonus: Donner un chiffre aléatoire 
alert(Math.round(Math.random())) */