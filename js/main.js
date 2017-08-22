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
  pays: "croatie".toUpperCase(),
  age: 17,
  paiement:"visa",

  getName: function() {
    alert("Je m'appelle" + " " + this.prenom);
  },
  getLastName: function() {
    alert("Mon nom est" + " " + this.nom);
  },
  getAge: function() {
    alert("Je suis né en" + " " + (2017-this.age));
  },
};
user.getName();
user.getLastName();
user.getAge();


var infos = {
  paysAutorisés: ["FRANCE", "BELGIQUE", "SUISSE", "LUXEMBOURG"],
  paiementAutorisés: ["VISA", "MASTERCARD", "CB", "PAYPAL"],
  ageMin: 18,
  getAutorisation: function() {
    if (user.age >= infos.ageMin) {
      alert("Vous pouvez naviguer sur notre site");
    }
    else {
      alert("Vous êtes trop jeune");
    }
  },

  verifPays : function(a) {
  if (infos.paysAutorisés.indexOf(user.pays.toUpperCase()) !== -1) {
alert("Pays OK");
  }
  else {
    alert("pays non autorisé!")
  }
},

      verifPaiement : function(a) {
      if (infos.paiementAutorisés.indexOf(user.paiement.toUpperCase()) !== -1) {
    alert("Paiement OK");
      }
},
};
infos.getAutorisation();
infos.verifPays();
infos.verifPaiement();


// for (x in infos.paysAutorisés){
//   alert("Pays Ok");
// } NE FONCTIONNE PAS , mettre argument , mettre alert dans objet, faire boucle for pour tableau

// for (x in infos.paimentAutorisés){
//   alert("Paiement OK");
// }
