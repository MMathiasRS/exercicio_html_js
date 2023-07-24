const num01 = document.getElementById("Number01");
const num02 = document.getElementById("Number02");

const msg = "Sucess ,Number B and bigger what number A ";
const msgErro = "False,Number B and bigger what number A";

const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (num01.value < num02.value) {
    document.querySelector(".msgHtml").innerHTML = msg;
    document.querySelector(".msgHtml").style.color = "green";
  } else {
    document.querySelector(".msgHtml").innerHTML = msgErro;
    document.querySelector(".msgHtml").style.color = "red";
  }
});