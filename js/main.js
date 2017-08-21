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
  pays: "France".toUpperCase(),
  age: 18,
  paiement:"visa",

  getName: function() {
    alert("Je m'appelle" + " " + this.prenom);
  }
  getLastName: function() {
    alert("Mon nom est" + " " + this.nom);
  }
  getLastName: function() {
    alert("Je suis né en" + " " + (2017-user.age));
  }
};


var infos = {
  paysAutorisés: ["FRANCE", "BELGIQUE", "SUISSE", "LUXEMBOURG"],
  paiementAutorisés: ["VISA", "MASTERCARD", "CB", "PAYPAL"],
  ageMin: 18,
  getAutorisation: function() {
    if (user.age >= infos.ageMin) {
      alert("Vous pouvez naviguer sur notre site");
      }

      verification : function(a) {
      if (infos.paiementAutorisés.indexOf(user.paiement.toUpperCase()) !== -1) {
    alert("Paiement OK");
      }

}

// for (x in infos.paysAutorisés){
//   alert("Pays Ok");
// } NE FONCTIONNE PAS , mettre argument , mettre alert dans objet, faire boucle for pour tableau

// for (x in infos.paimentAutorisés){
//   alert("Paiement OK");
// }

  }
};

// REVOIR FUNCTION POUR VERIF PAIEMENT



infos.getAutorisation();
verification();
