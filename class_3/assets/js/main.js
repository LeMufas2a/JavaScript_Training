/*   class Objet {
    constructor(nom, prix) {
        this.nom = nom
        this.prix = +prix

    }

}


let monStylo = new Objet("Stylo", 5)

let monBic = new Objet("bic", 2)

let tableau = [monStylo, monBic]

class Personnage {
    constructor(nom, sac, argent) {
        this.nom = nom
        this.sac = sac
        this.argent = +argent
        this.prendre = () => {
            this.sac.push(tableau.shift());
        }
        this.acheter = (vendeur, objet) => {
            this.argent = this.argent - objet.prix
            this.sac.push(vendeur.sac.shift());
        }
    }
}

let mufasa = new Personnage("Mufasa", [], 10)

let leyaske = new Personnage("Fondant", [], 20)
leyaske.prendre(tableau)
console.log(leyaske);

mufasa.acheter(leyaske, leyaske.sac[0])
console.log(mufasa); */
 


/* class Objet {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

let clavier = new Objet("Clavier", 25);
let souris = new Objet("Souris", 15);

let boite = [clavier, souris];

class Personnage {
    constructor(nom, sac, argent) {
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        this.prendre = (objet) => {
            this.sac.push(objet.shift());
        }
        this.acheter = (nom, objet) => {
            this.argent -= objet.prix;
            nom.argent += objet.prix;
            this.sac.push(objet);
            nom.sac.splice(nom.sac.indexOf(objet), 1);
        }
    }
}

let cem = new Personnage("Cem", [], 100);
let said = new Personnage("Saïd", [], 100);

cem.prendre(boite);
said.prendre(boite);

said.acheter(cem, clavier); */