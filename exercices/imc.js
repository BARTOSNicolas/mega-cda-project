// Exo IMC
class Imc {
    constructor(nom, poid, taille) {
        this.nom = nom
        this.poid = poid
        this.taille = taille
    }
    calculerImc() {
        const imc = this.poid / (this.taille * this.taille)
        return imc.toFixed(2)
    }
}

const list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO", 300, 2),
    new Imc("Gontrand", 90, 1.75),
    new Imc("Colonel Clock", 200, 1.75),
    new Imc("Josiane de la Vega ", 99, 1.55),
]

function display(imc) {
    console.log(`${imc.nom} (${imc.poid} kg, ${imc.taille} M) a un IMc de : ${imc.calculerImc()}`)
}

for (let imc of list) {
    display(imc)
}