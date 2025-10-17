// Exercice Magasin
class Produit {
    constructor(nom, prix, quantite) {
        this.nom = nom
        this.prix = prix
        this.quantite = quantite
    }
    disponible() {
        return this.quantite > 0
    }
}

class Magasin {
    constructor(produits = []) {
        this.produits = produits
    }
    ajouterProduit(produit) {
        if (this.produits.map(p => p.nom).includes(produit.nom)) {
            throw new Error("Le produit existe déjà dans la liste")
        }
        this.produits.push(produit)
        console.log(`Le produit ${produit.nom} a été ajouté au magasin`)
    }
    chercherProduit(nom) {
        let produit = this.produits.find(p => p.nom === nom)
        if (!produit) {
            throw new Error("Le produit n'existe pas dans le magasin")
        }
        console.log(`Nous avons trouver le produit ${produit.nom} à ${produit.prix} euros`)
    }
}
const magasin = new Magasin()
const produits = {
    voiture: new Produit("Voiture", 100000, 10),
    smartphone: new Produit("Smartphone", 5000, 10),
    tablette: new Produit("Tablette", 2000, 10),
    sac: new Produit("Sac", 100, 10),
    bicyclette: new Produit("Bicyclette", 1000, 10),
}
for (let key in produits) magasin.ajouterProduit(produits[key])
try {
    magasin.ajouterProduit(produits.voiture)
} catch (error) {
    console.log(error.message)
}
try {
    magasin.chercherProduit("Smartphone")
} catch (error) {
    console.log(error.message)
}
try {
    magasin.chercherProduit("Chaussures")
} catch (error) {
    console.log(error.message)
}