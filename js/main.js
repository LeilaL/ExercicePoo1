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
  paiement:["visa", "mastercard", "cb"],
};

alert("Je m'appelle" + " " + user.prenom);
alert("Mon nom est" + " " + user.nom);
alert("Je suis né en" + " " + (2017-user.age));

var infos = {
  paysAutorisés: ["FRANCE", "BELGIQUE", "SUISSE", "LUXEMBOURG"],
  paiementAutorisés: ["VISA", "MASTERCARD", "CB", "PAYPAL"],
  ageMin: 18,
  getAutorisation: function() {
    if (user.age >= infos.ageMin) {
      alert("Vous pouvez naviguer sur notre site");
}

for (x in infos.paysAutorisés){
  alert("Pays Ok");
}

// for (x in infos.paimentAutorisés){
//   alert("Paiement OK");
// }

  }
};

  function verification(a) {
  if (infos.paiementAutorisés.indexOf(user.paiement.toUpperCase()) !== -1) {
alert("Paiement OK");
  }
}

infos.getAutorisation();
verification();
