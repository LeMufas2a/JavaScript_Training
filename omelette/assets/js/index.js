// Class Personne
class Personne {
    constructor(nom, lieu, argent, mainDroite, mainGauche) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
        this.seDeplacer = (lieu) => {
            this.lieu = lieu.nom
            lieu.perso = this.nom
        }
        this.payerArticle = () => {
            epicerie.ingredient.forEach(e => {
                perso.mainDroite[0].contenu.push(e)
                console.log(`Vous avez pris pris l'ingrédient : ${e.nom} au prix de ${e.prix}`);
                perso.argent -= e.prix
            })
        }
        this.couper = (ingredient, outil) => {
            ingredient.etat = outil.action
        }
        this.melanger = (nomMelange, outil) => {
            outil.melanger(nomMelange)
        }
    }
}

// Instance Personne 

let perso = new Personne("Akhtar", "a", 100, [], [])

// Couteau
let couteau = {
    nom: "couteau",
    action: "coupé"
}

// Class Lieu
class Lieu {
    constructor(nom, personnes, item) {
        this.nom = nom
        this.personnes = personnes
        this.item = item
    }
}
// Maison (Lieu)

let maison = new Lieu("Maison", [], [])





// Class Ingrédients
class Ingrédient {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

// Ingrédients 
let oignon = new Ingrédient("oignon", "entier", 4);
let oeuf = new Ingrédient("oeufs", "entier", 3);
let epice = new Ingrédient("epice", "moulu", 2);
let fromage = new Ingrédient("fromage", "entier", 10);
let poivron = new Ingrédient("poivron", "entier", 1);
let paprika = new Ingrédient("paprika", "moulu", 1.5);


// Epicerie (Lieu)

let epicerie = {
    nom: "epicerie",
    personnes: [],
    paniers: [
        panier1 = {
            type: "panier",
            contenu: []
        },
        panier2 = {
            type: "panier",
            contenu: []
        },
        panier3 = {
            type: "panier",
            contenu: []
        }
    ],
    ingredient: [oignon, oeuf, epice, fromage, poivron, paprika],
}


let poele = {
    contenu: [],
    cuire() {
        setTimeout(() => {
            this.contenu[0].etat = "cuite"
            console.log(`L'omelette est ${this.contenu[0].etat} !`);
        }, 4000);
    }
}

let bol = {
    contenu: [],
    melanger(nomMelange) {
        let newMelange = {
            nom: nomMelange,
            etat: "pas cuit",
        }
        while (this.contenu.length > 0) {
            this.contenu.shift()
        }
        this.contenu.push(newMelange)
    }
}



// Pour dire que le personnage est à la maison :

perso.seDeplacer(maison)

// Afficher un message tel que:

console.log(perso.nom + " est actuellement à la " + perso.lieu);

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie

perso.seDeplacer(epicerie)

console.log(perso.nom + " est actuellement à la " + perso.lieu);

// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)

perso.mainDroite.push(epicerie.paniers.shift());
console.log(`${perso.nom} a pris un ${perso.mainDroite[0].type}`)

// console.log(epicerie);
// console.log(perso); 

// J créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire uene COPIE dans le panier du personnage

perso.payerArticle()

// Afficher un message de ce qu'il reste d'argent sur le personnage.

console.log(perso.argent);

// rentrer à la maison (comme ça on pourra cuisiner)

perso.seDeplacer(maison)

// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)

i++
while (perso.mainDroite[0].contenu.length > 0) {
    bol.contenu.push(perso.mainDroite[0].contenu.shift())
    console.log(bol.contenu.[i].nom);
}

/* perso.couper(bol, couteau)

console.log(bol); */




// perso.melanger("omelette", bol)