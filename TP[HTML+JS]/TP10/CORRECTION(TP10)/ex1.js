function test() {
  code = document.getElementById("a").value;
  nom = document.getElementById("b").value;
  select = document.getElementById("l1").selectedIndex;
  note = 0;

  if (code.length != 3 || isNaN(code)) {
    alert("code non valide");
    return false;
  }
  if (nom == "") {
    alert("nom non valide");
    return false;
  }
  if (select == 0) {
    alert("selection obligatoire");
  }
  if (document.getElementById("d").checked == true) {
    note++;
  }
  if (document.getElementById("l2").selectedIndex == 2) {
    note++;
  }
  if (
    document.getElementById("C1").checked == false &&
    document.getElementById("C2").checked == true &&
    document.getElementById("C3").checked == true &&
    document.getElementById("C4").checked == true
  ) {
    note++;
  }
  alert(nom + " votre note est  " + note);
}
