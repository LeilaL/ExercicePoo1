var user = {
  prenom: "Martin",
  nom: "Matin",
  pays: "France",
  age: 11,
  paiement:["visa", "mastercard", "cb"],
};

alert("Je m'appelle" + " " + user.prenom);
alert("Mon nom est" + " " + user.nom);
alert("Je suis né en" + " " + (2017-user.age));

var infos = {
  paysAutorisés = ["FRANCE", "BELGIQUE", "SUISSE", "LUXEMBOURG"];
  paimentAutorisés = ["VISA", "MASTERCARD", "CB", "PAYPAL"];
  ageMin = 18;

}
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
