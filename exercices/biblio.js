// Exercice Bibliothèque
class Livre {
    constructor(titre, auteur, disponible = true) {
        this.titre = titre
        this.auteur = auteur
        this.disponible = disponible
    }
    emprunter() {
        if (this.disponible) {
            this.disponible = false
        } else {
            throw new Error(`Le livre ${this.titre} de ${this.auteur} n'est pas disponible`)
        }
    }
    retourner() {
        this.disponible = true
    }
}

class Bibliotheque {
    constructor(nom, livres = []) {
        this.nom = nom
        this.livres = livres
    }
    ajouterLivre(livre) {
        this.livres.push(livre)
        console.log(`Le livre ${livre.titre} de ${livre.auteur} a été ajouté à la bibliothèque`)
    }
    emprunterLivre(titre) {
        const livre = this.livres.find(l => l.titre.toLowerCase() === titre.toLowerCase())
        if (livre) {
            livre.emprunter()
            console.log(`Vous empruntez le livre ${livre.titre} de ${livre.auteur}`)
        } else {
            throw new Error(`Vous ne pouvez pas emprunter le livre "${titre}", il n'est pas dans notre bibliothèque`)
        }
    }
    retournerLivre(titre) {
        const livre = this.livres.find(l => l.titre.toLowerCase() === titre.toLowerCase())
        if (livre) {
            livre.retourner()
            console.log(`Vous retournerez le livre ${livre.titre} de ${livre.auteur}`)
        } else {
            throw new Error(`Vous ne pouvez pas retourner le livre "${titre}", il n'existe pas dans notre bibliothèque`)
        }
    }
}

const bibliotheque = new Bibliotheque("Biblothèque municipale")

const livres = {
    niourk: new Livre("Niourk", "Stephen Wul"),
    dune: new Livre("Dune", "Frank Herbert"),
    corps: new Livre("Le Problème à trois corps", "Liu Cixin"),
    horde: new Livre("La Horde du Contrevent", "Alain Damasio")
}

for (let key in livres) bibliotheque.ajouterLivre(livres[key])

try {
    bibliotheque.emprunterLivre("Niourk")
} catch (error) {
    console.log(error.message)
}
try {
    bibliotheque.emprunterLivre("Dune")
} catch (error) {
    console.log(error.message)
}
try {
    bibliotheque.emprunterLivre("Les fantômes du passé")
} catch (error) {
    console.log(error.message)
}
try {
    bibliotheque.emprunterLivre("Niourk")
} catch (error) {
    console.log(error.message)
}
try {
    bibliotheque.retournerLivre("Niourk")
} catch (error) {
    console.log(error.message)
}

try {
    bibliotheque.retournerLivre("Les fantômes du passé")
} catch (error) {
    console.log(error.message)
}