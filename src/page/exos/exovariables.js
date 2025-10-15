let int = 10;
let float = 10.0000;
let string = "dix";
let bool = false;
let array = [10, 10.0, "dix"];
let object = new Object();
object = { "int" : 10, "float" : 10.000};

console.log( "integer = "+ int + "\nfloat = "+ float +"\nstring = "+ string + "\nbool = "+ bool + "\narray = "+ array + "\nobject = "+ object["int"]);

let variété;
let nomClient;
let duréeLivraison;
let adresse;
let blagueNul;

variété = "4 fromages";
nomClient = "Dupont";
duréeLivraison = 15;
adresse = "10, rue des pizzas";
blagueNul = `Qu'est qu'une pizza dit a un autre pizza qui lui demandait des conseils ?\n"Suis ta pâte et tout ira bien !"`;
let sumUpPhrase = `Bonjour, Mr ${nomClient}, votre pizza: ${variété} est en cours de préparation.\nElle vous sera livrée d'ici ${duréeLivraison} minutes au ${adresse}.\nMerci d'avoir commandé chez la pizzeria "Raffinata"\n${blagueNul}`

console.log(sumUpPhrase);