class CompteBancaire {
    constructor(prenom, nom, solde, numCompte){
        this.prenom = prenom;
        this.nom = nom;
        this.solde = solde;
        this.numCompte = numCompte;
    }

    crediter(somme){
        this.solde += somme
        console.log(this.prenom +" : "+this.solde);
    }

    retrait(somme){

    }
    
    virement(nom, somme){
        this.solde -= somme;
        console.log(this.prenom +" : "+this.solde)
        lesComptes[nom].crediter(somme);
    }
}

// Main, gère 3 comptes bancaires dans un tableau associatif 
const lesComptes = { 
Alex: new CompteBancaire("Alex", "A.", 0, 1), 
Clovis: new CompteBancaire("Clovis", "B.", 0, 2), 
Marco: new CompteBancaire("Marco", "C.", 0, 3), 
}; 
// lecture tableau associatif ou Objet["truc"] 
// Crédite et décrit chaque compte 
for (let key in lesComptes) lesComptes[key].crediter(1000); 
// un retrait de 100 par Alex 
//???????????????; 
// un petit virement: Marco Vire 300 à Clovis 
lesComptes["Marco"].virement("Clovis", 300);
// un petit retrait incorrect (doit déclencher erreur custom) :  
// Alex fait un retrait de 1200 
//?????; 
// bilan : faire une description de tous les comptes en console (ou DOM ?) 
//??????;