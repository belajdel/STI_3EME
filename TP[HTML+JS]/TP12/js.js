function generate() {
  cap = "";
  T = new Array();
  for (i = 0; i < 26; i++) {
    /** generation aleatoire de 26 nombres 0 ou 1 */
    T[i] = Math.floor(Math.random() * 2);
  }
  for (i = 0; i < 26; i++) {
    /** former le code captcha */
    if (T[i] == 1) {
      cap = cap + String.fromCharCode(65 + i);
    }
  }
  voy = "AEYUIO";
  x = 0;
  for (i = 0; i < cap.length; i++) {
    /** compter le nombre des voyelle **/
    if (voy.indexOf(cap[i]) != -1) {
      x++;
    }
  }
  cap = cap + String.fromCharCode(70 + x);
  document.getElementById("captcha").value = cap;
}

function verif() {
  list = document.getElementById("l1").selectedIndex;
  r1 = document.getElementById("r1").checked;
  r2 = document.getElementById("r2").checked;
  r3 = document.getElementById("r3").checked;
  r4 = document.getElementById("r4").checked;
  r5 = document.getElementById("r5").checked;
  r6 = document.getElementById("r6").checked;

  if (list == 0) {
    alert("Veuillez choisir un Hotel");
    return false;
  }

  if (
    (r1 == false && r2 == false && r3 == false) ||
    (r4 == false && r5 == false && r6 == false)
  ) {
    alert("Veuillez completer l'évaluation Acceuil et Restauration");
    return false;
  }

  captcha = document.getElementById("captcha").value;
  rep = document.getElementById("retype").value;
  
  repcorrecte = captcha.length;
  

  if (rep != repcorrecte) {
    alert("Réponse incorrecte");
  } else {
    alert("Réponse correcte");
  }
}
