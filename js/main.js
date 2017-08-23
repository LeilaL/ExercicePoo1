// function user(prenom, nom, pays, age, annee, paiement) {
//     this.prenom = first;
//     this.nom = last;
//     this.pays = pays;
//     this.age = age;
//     this.annee = annee;
//     this.paiement = paiement;
//     this.getInfos = function() {
//         alert(this.prenom);
//     };
// }
//
// var inconnu = new Person("Martin", "Matin", "France", 11, 2017);
//
// inconnu.getInfos();

var user = {
    prenom: "Martin",
    nom: "Matin",
    pays: "france".toUpperCase(),
    age: 18,
    paiement: ["visa", "cb", "paypal"],

    // paiement.map : function(x) {
    //    return x.toUpperCase() }


    getName: function() {
        alert("Je m'appelle" + " " + this.prenom);
    },
    getLastName: function() {
        alert("Mon nom est" + " " + this.nom);
    },
    getAge: function() {
        alert("Je suis né en" + " " + (2017 - this.age));
    },
};
user.getName();
user.getLastName();
user.getAge();

// toUpper = function(x){
//   return x.toUpperCase();
// };
// user.paiement.map(toUpper);


var infos = {
    paysAutorisés: ["FRANCE", "BELGIQUE", "SUISSE", "LUXEMBOURG"],
    paiementAutorisés: ["VISA", "MASTERCARD", "CB", "PAYPAL"],
    ageMin: 18,
    getAutorisation: function() {
        if (user.age >= infos.ageMin) {
            alert("Vous pouvez naviguer sur notre site");
        } else {
            alert("Vous êtes trop jeune");
        }
    },

    verifPays: function(a) {
        if (infos.paysAutorisés.indexOf(user.pays.toUpperCase()) !== -1) {
            alert("Pays OK");
        } else {
            alert("pays non autorisé!")
        }
    },

    verifPaiement: function(a) {
        var paiOk = 0;
        for (var i = 0; i < user.paiement.length; i++) {
            user.paiement[i] = user.paiement[i].toUpperCase();
            // $tabMaj = array_map('strtoupper', $user.psaiement);
            if (infos.paiementAutorisés.includes(user.paiement[i])) {
                paiOk++;
                console.log(paiOk);
            }
        }
        if (paiOk) {
            alert("Paiement OK");
        } else {
            alert("Paiement non autorisé");
        }
    }
};
infos.getAutorisation();
infos.verifPays();
infos.verifPaiement();
