// ## 1. Les réponses booléenes(part 1)

/* let x = prompt("Donnez moi un nombre")
let y = prompt("Donnez moi un nombre")
console.log(x == y);
alert("Le nombre" + x + " et le nombre " + y + " sont - ils égaux ? :" + (x == y)) */


// ## 2. Les réponses booléennes (part 2)

/* let x = prompt("Donnez moi un nombre")
let y = prompt("Donnez moi un nombre")
alert("Le nombre" + x + " est il plus petit que  " + y + " ? :" + (x < y)) */


// ## 3. Les réponses booléenes (part 3)
/* let x = prompt("Donnez moi un nombre")
let y = prompt("Donnez moi un nombre")
let z = prompt("Donnez moi un nombre")
alert("La somme de " + x + " + " + y + " est - elle plus grande que le " + z + " ? : " + (x + y < z)) */


// ## 4. Strings et calculs
/* let x = prompt("Ecris une phrase")
let y = prompt("Combien penses-tu avoir de caractère dans ta phrase ? ")
y = parseInt(y)
if (x.length == y) {
    alert("Bravo tu as trouvé le nombre de caractère")
} else
    if (!isNaN(y)) {
        alert("Faux, vous êtes à " + Math.abs(x.length - y) + " caractères de la bonne réponse.")
    } else {
        alert("entrez un nombre");
    } */

// ## 5. Des maths sans Maths
/* let x = parseInt(prompt("Donnez moi un nombre"))
let y = parseInt(prompt("Donnez moi un nombre"))
if (x > y) {
    alert("vous avez une différence de " + (x - y))
} else if (!isNaN(x) && !isNaN(y)) {
    alert("vous avez une différence de " + (y - x))

} else {
    alert("Vous n'avez pas rentré un nombre");
    x = parseInt(prompt("Donnez moi un nombre"))
    y = parseInt(prompt("Donnez moi un nombre"))
    if (x > y) {
        alert("vous avez une différence de " + (x - y))
    } else if (!isNaN(x) && !isNaN(y)) {
        alert("vous avez une différence de " + (y - x))
    }
}
 */



// ## 6. Qui ~~a la plus grosse~~ est le plus grand ?
/* let x = parseInt(prompt("Donnez moi un nombre"))
let y = parseInt(prompt("Donnez moi un nombre"))
let z = parseInt(prompt("Donnez moi un nombre"))
if (Math.max(x, y, z)) {
    alert(" Entre " + x + " , " + y + " et " + z + "  " + Math.max(x, y, z) + " est plus grand")
} else {

} */

// ## 7. Respect des consignes
/* let prenom = prompt("Donne ton prénom")
if (prenom) {
    alert("Salut" + prenom + " ")
} else {
    alert("Veuillez mettre un prénom")
    prenom = prompt("Donne ton prénom")
} */


// ## 8. Abonnez-vous

/* let abo = prompt("Vous voulez vous abonner ? ")
if (abo === "oui") {
    let elias = prompt("Quelle formule souhaitez vous ? luxe ou normal")
    if (elias === "luxe") {
        alert("Félicitation pour avoir choisi la formule luxe")
    } else if (elias === "normal") {
        alert("Félicitation pour la formule de pauvre")
    } else {
        alert("êtes vous sûr ? ")
        let refus = prompt("Quelle formule souhaitez vous ? luxe ou normal")
        if (refus === "luxe") {
            alert("Félicitation pour avoir choisi la formule luxe")
        } else if (refus === "normal") {
            alert("Félicitation pour la formule de pauvre")
        }
        else {
            alert("Ciao ")
        }
    }
} else {
    alert("Au revoir !  ")
} */

/* let abo = confirm("Vous voulez vous abonner ?")
if (abo) {
    let elias = prompt("Quelle formule souhaitez vous ? luxe ou normal")
    if (elias == "luxe") {
        alert("Félicitation pour votre abonnement à la formule Luxe !")
    } else if (elias == "normal") {
        alert("Merci pour votre abonnement.")

    } else {
        let refus = confirm("es-tu sur ? ")
        if (refus) {
            alert("Au revoir")
        } else {
            elias = prompt("Quelle formule souhaitez vous ? luxe ou normal")
            if (elias == "luxe") {
                alert("Félicitation pour votre abonnement à la formule Luxe !")
            } else if (elias == "normal")
                alert("Merci pour votre abonnement.")
        }
    }
} else {
    alert("Merci a bientôt")
} */


// ## 9. Questions pour un codeur
/* let nom = prompt("Nom")
let prenom = prompt("Prénom")

let rep1 = "Akhtar"
let rep2 = "Mustafa"
if (nom != rep1 && prenom != rep2) {
    alert("tu as échoué ")
}
else if (nom == rep1 && prenom == rep2) {
    alert(" tu as bien répondu a toutes les questions")
} else {
    if (rep1 == nom) {
        alert("tu as trouvé le nom" + nom)
    }
    else {
        alert("tu t'es trompé sur le nom tu as répondu " + nom + " mais la réponse étais " + rep1)
    }
} */


// ## 10. C'est moi qui dit qui qui entre et qui qui entre pas
/* let cinema = parseInt(prompt("Quel est ton âge ?"))
console.log(cinema);
if (cinema > 18) {
    alert("vous êtes majeur, vous pouvez réserver.")
} else if (cinema <= 0) {
    alert("revenez quand vous serez né")
} else if (cinema == 18) {
    alert("Réservez mais attention, c'est tout juste et ce film peut être choquant !")
} else if (isNaN(cinema)) {
    alert("Vu que vous ne savez pas lire une instruction, je présume que vous n'avez pas l'âge.")
} else {
    alert("vous êtes mineur, revenez plus tard.")

}
 */
// # 11. Mais oui, c'est ~~clair~~ Logique (opérateus logiques)

/* let vacances = confirm("Voulez-vous partir en vacances ?")
let riche = confirm("Est-ce que vous êtes riche ?")
let chat = confirm("Est-ce que vous avez un chat ?")

if (!vacances) {
    alert("Pas de problème, ne partez pas en vacances.")
}
if (!riche || chat) {
    alert("Même si vous le vouliez, vous ne pouriez pas partir...")
}
if (riche && !chat) {
    alert("Vous pourriez partir en vacance si vous le vouliez.")
}
if (riche && !chat && vacances) {
    alert("Tout est parfait, partez en vacance !")
}
if (!(!riche || chat || !vacances)) {
    alert("Tout est parfait, partez en vacance !")
}
 */
