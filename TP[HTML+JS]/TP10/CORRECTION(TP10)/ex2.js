p = 3;
function test() {
  let n = document.getElementById("a").value;
  let c = document.getElementById("b").value;
  if (n != "user" || c != "pwd") {
    p--;
    alert("tu as encore  " + p + " tentatives");

    if (p == 0) {
      document.getElementById("a").disabled = true;
      document.getElementById("b").disabled = true;
      document.getElementById("c").disabled = true;
    }
  } else {
    document.getElementById("x").style.display = "block";
  }
}
