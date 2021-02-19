class Lieu {
    constructor(nom, personnes) {
        this.nom = nom
        this.personnes = personnes

    }
}

let map = new Lieu("MolenGeek", [])
let map2 = new Lieu("Snack", [])
let map3 = new Lieu("Maison", [])



class Personne {
    constructor(nom, prenom, argent) {
        this.nom = nom
        this.prenom = prenom
        this.argent = +argent
        this.se_deplacer = (vehicule) => {
            vehicule.embarquer(this)

        }


    }
}

let perso = new Personne("Akhtar", "Mohammed", 10)

class Bus {
    constructor(personnes, caisse) {
        this.personnes = personnes
        this.caisse = caisse
        this.embarquer = (individu) => {
            if (individu.argent >= 2.80) {
                individu.argent -= 2.80
                console.log(`vous pouvez entré dans le bus`);
                this.caisse += 2.80
                this.personnes.push(individu.nom + " " + individu.prenom)
            }
        }
    }

}

let bus = new Bus([], 0)

console.log(`Il est 8h00 et je suis a la ${map3.nom}`);
console.log(`8h30 Je prend le bus vers molengeek`);
console.log(perso);
perso.se_deplacer(bus)
console.log(perso);
console.log(`8h45 je suis a ${map.nom}`);
console.log(`12h45 je sors de ${map.nom} et je prend le bus pour aller au ${map2.nom}`);
console.log(perso);
perso.se_deplacer(bus)
console.log(perso);
console.log(`13h30 je sors du ${map2.nom} et je rentre a pied à ${map.nom}`);
console.log(`17h10 je sors de ${map.nom}, vous prenez le bus rentrer chez vous`);
console.log(perso);
perso.se_deplacer(bus)
console.log(perso);

//  Tofixed va garder un nombre définit après la virgule
console.log(perso.argent.toFixed(2));
console.log(bus.caisse.toFixed(2));

console.log(bus);

// Comment sortir du bus
