// Exercice sur les comptes bancaires

class CompteBancaire {
    constructor(nom, solde = 0) {
        this.nom = nom
        this.solde = solde
    }
    deposer(montant) {
        console.log(`Ajout de : ${montant} pour : ${this.nom}`)
        this.solde += montant
    }
    retirer(montant) {
        console.log(`Retrait de : ${montant} pour : ${this.nom}`)
        if (montant > this.solde) {
            throw new Error("Solde insuffisant")
        }
        this.solde -= montant

    }
    showSolde() {
        console.log(`Compte ${this.nom} : ${this.solde}`)
    }
    virement(montant, compte) {
        this.retirer(montant)
        compte.deposer(montant)
        console.log(`Virement de : ${montant} de : ${this.nom} pour : ${compte.nom}`)
    }
}

const lesComptes = {
    alex: new CompteBancaire("Alex"),
    clovis: new CompteBancaire("Clovis"),
    marco: new CompteBancaire("Marco"),
}

for (let key in lesComptes) lesComptes[key].deposer(1000)
// un retrait de 100 par Alex
lesComptes.alex.retirer(100)
// un petit virement : Marco vire 300 à Clovis
try {
    lesComptes.marco.virement(300, lesComptes.clovis)
} catch (error) {
    console.log(error.message)
}

// un petit retrait incoorect (doit declencher une erreur custom) :
// Alex fait un retrait de 1200
try {
    lesComptes.alex.retirer(1200)
} catch (error) {
    console.log(error.message)
}
// Bilan : faire une description de tous les comptes en console.log
for (let key in lesComptes) lesComptes[key].showSolde()