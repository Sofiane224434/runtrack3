let compteur = document.getElementById("compteur");
let button = document.getElementById("button");
function addone() {
    compteur.textContent = parseInt(compteur.textContent) + 1;
}
button.addEventListener("click", addone);