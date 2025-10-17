// // Scénario 
class Pme {
    constructor(nomEntreprise, equipe, R, FF, FA, N, XXX) {
        this.nomEntreprise = nomEntreprise;
        this.equipe = equipe;
        this.R = R;
        this.FF = FF;
        this.FA = FA;
        this.N = N;
        this.XXX = XXX;
    }

    bilanCalculed() {
        let totalEquipe = 0;
        this.equipe.forEach(employee => {
            let salaireAnnuel = 0;
            let chargeAnnuel = 0;
            salaireAnnuel += (employee.salaireMensuel * this.N);
            chargeAnnuel += (salaireAnnuel * this.XXX);
            totalEquipe += (salaireAnnuel + chargeAnnuel);
        });
        let initial = this.FF + this.FA;
        let bilan = this.R - (initial + totalEquipe);

        console.log("----------MA PME----------- \n" + this.nomEntreprise + " : Cout Initial : " + initial + "\n" + this.nomEntreprise + " : Cout Total Equipe : " + totalEquipe + "\n" + this.nomEntreprise + " : VENTES  :" + this.R + "\n" + this.nomEntreprise + " : BILAN : " + bilan)
    }
}
class Employee {
    constructor(prenom, nom, age, salaireMensuel) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.salaireMensuel = salaireMensuel;
    }
}

const pme = new Pme(
    //Le nom entreprise 
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau) 
    [new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat 
    300000,
    20000,
    50000,
    // le nombre de mois, les charges
    12,
    0.9
);
console.log(pme);
pme.bilanCalculed();