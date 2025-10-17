// Exo PME
class Employee {
    constructor(lastname, firstname, age, salaire) {
        this.lastname = lastname
        this.firstname = firstname
        this.age = age
        this.salaire = salaire
    }
}

class Pme {
    constructor(name, employees, R, FF, FA, N, XXX) {
        this.name = name
        this.employees = employees
        this.R = R
        this.FF = FF
        this.FA = FA
        this.N = N
        this.XXX = XXX
    }
    calculerSalaires() {
        const charges = 1 + (this.XXX / 100)
        const salaires = this.employees.map(employee => employee.salaire * charges * this.N)
        return salaires.reduce((acc, salaire) => acc + salaire, 0) // Pas facile a comprendre celle là
    }
    calculerInitial() {
        return this.FF + this.FA
    }
    calculerBilan() {
        return this.R  - (this.calculerSalaires() + this.calculerInitial())
    }
    showPME() {
        console.log(`------------${this.name}------------`)
        console.log(`Ma petite entreprise - ${this.name} : Cout Initial : ${this.calculerInitial()}`)
        console.log(`Ma petite entreprise - ${this.name} : Cout Total Equipe: ${this.calculerSalaires()}`)
        console.log(`Ma petite entreprise - ${this.name} : VENTES : ${this.R}`)
        console.log(`Ma petite entreprise - ${this.name} : BILAN : ${this.calculerBilan()}`)
        if (this.calculerBilan() > 0) {
            console.log(`Elle ne connait pas la crise`)
        } else {
            console.log(`Elle connait bien la crise`)
        }
    }

}

const pme = new Pme(
    "Ma PME",
    [new Employee("Alain", "Chabal", 39, 4000),
        new Employee("Josiane", "De la Vega", 72, 3000),
        new Employee("Lucie", "Faire", 24, 2000)],
    300000,
    20000,
    50000,
    12,
    90)

pme.showPME()