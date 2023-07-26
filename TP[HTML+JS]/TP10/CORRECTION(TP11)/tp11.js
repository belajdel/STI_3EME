function verif() {
  ps = document.getElementById("ps").value;
  if (5 > ps.length || ps.length > 10) {
    alert("pseudo doit etre de longeur entre 5 et 10");
    return false;
  }
  mail = document.getElementById("m").value;
  if (mail == "" || mail.indexOf("@") == -1) {
    alert("email est obligatoire");
    return false;
  }
  mdp = document.getElementById("pwd").value;
  if (verifPassword(mdp) == false) {
    alert("mot de passe invalide");
    return false;
  }
  rmdp = document.getElementById("rpwd").value;
  if (mdp != rmdp) {
    alert("confirmation mot de passe invalide");
    return false;
  }
}

function verifPassword(mdp) {
  majus = false;
  minus = false;
  chif = false;
  test = majus && minus && chif;
  i = 0;

  while (i < mdp.length && test == false) {
    if (mdp[i] >= "A" && mdp[i] <= "Z") {
      majus = true;
    }
    if (mdp[i] >= "a" && mdp[i] <= "z") {
      minus = true;
    }
    if ("0" <= mdp[i] && mdp[i] <= "9") {
      chif = true;
    }
    i++;
    test = majus && minus && chif;
  }

  return majus && minus && chif;
}

function calculer() {
  if (document.getElementById("a1").checked == true) {
    //test si enfant

    if (document.getElementById("lst").selectedIndex == 0) {
      //test gymnast

      if (document.getElementById("m1").checked) {
        // test 1 mois
        document.getElementById("nap").value = "40dt";
      } else if (document.getElementById("m2").checked) {
        // test 3 mois
        document.getElementById("nap").value = "100dt";
      } else {
        alert("Veuillez indiquez le type d'abonnement!");
      }
    } else {
      if (document.getElementById("m1").checked) {
        // test 1 mois
        document.getElementById("nap").value = "30dt";
      } else if (document.getElementById("m2").checked) {
        // test 3 mois
        document.getElementById("nap").value = "80dt";
      } else {
        alert("Veuillez indiquez le type d'abonnement!");
      }
    }
  } else if (document.getElementById("a2").checked == true) {
    if (document.getElementById("lst").selectedIndex == 0) {
      //test gymnast
      if (document.getElementById("m1").checked) {
        // test 1 mois
        document.getElementById("nap").value = "50dt";
      } else if (document.getElementById("m2").checked) {
        // test 3 mois
        document.getElementById("nap").value = "140dt";
      } else {
        alert("Veuillez indiquez le type d'abonnement!");
      }
    } else {
      if (document.getElementById("m1").checked) {
        // test 1 mois
        document.getElementById("nap").value = "40dt";
      } else if (document.getElementById("m2").checked) {
        // test 3 mois
        document.getElementById("nap").value = "100dt";
      } else {
        alert("Veuillez indiquez le type d'abonnement!");
      }
    }
  } else {
    alert("Veuillez indiquez votre age !");
  }
}

function Imc() {
  taille = document.getElementById("t").value;
  poids = document.getElementById("p").value;

  if (taille == "") {
    alert("Veuillez donnez votre taille!");
  } else if (poids == "") {
    alert("Veuillez donnez votre poids!");
  } else {
    imc = poids / Math.pow(taille, 2);
    document.getElementById("res").value = Math.round(imc * 100) / 100;
  }
}
