
var user = {
  prenom: "Martin",
  nom: "Matin",
  pays: "france".toUpperCase(),
  age: 18,
  paiement: ["visa", "cb", "paypal"],


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

  verifPays: function(x) {
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
