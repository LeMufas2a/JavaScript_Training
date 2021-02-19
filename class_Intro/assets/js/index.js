class Lieux {
    constructor(nom, contenu, ingrédients) {
        this.nom = nom;
        this.contenu = contenu;
        this.ingrédients = ingrédients;
    };
};

let maison = new Lieux("maison", ["chaise", "table"])
console.log(maison);
let epicerie = new Lieux("maison", ["samosa", "croissant"], ["farine", "lait"])
console.log(epicerie);
let cuisine = new Lieux("maison", ["couteau", "fourchette"], ["Salade", "Mais", "oignon"])
console.log(cuisine);

class Ingre {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.état = etat;
        this.prix[0] = prix[0];
    };
};

let poivron = new Ingré("poivron", "entier", 1)

let oignon = new Ingré("oignon", "entier", 2)

let oeuf = new Ingré("oeuf", "entier", 4)

let epice = new Ingré("epice", "moulu", 3.25)

let paprika = new Ingré("paprika", "moulu", 1.52)

let fromage = new Ingré("fromage", "coupé", 1.6)

class Personne {
    constructor(nom, lieu, argent, panier) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;

        this.se_deplacer = (se_deplacer) => {

        };
        this.panier = (payer) => {

        };
        this.couper = (couper) => {

        };
    };
};

let personnage = new Personne("Maxime", "néant", 100, [],)
personnage.se_deplacer(x)
personnage.payer(x)
personnage.couper(x, y)



