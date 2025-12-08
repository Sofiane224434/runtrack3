let konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let tableau = [];

function konamiCheck(e) {
    if (e.key === konami[tableau.length]) {
        tableau.push(e.key);
    }
    else {
        tableau = [];
    }
    
    if (tableau.length === konami.length) {
        document.body.style.backgroundColor = "blue";
        let message = document.createElement("div");
        message.textContent = "Code Konami activé !";
        message.style.color = "white";
        message.style.textAlign = "center";
        message.style.fontSize = "48px";
        message.style.marginTop = "20%";
        document.body.innerHTML = "";
        document.body.appendChild(message);
        tableau = [];
    }
}
window.addEventListener("keydown", (e) => konamiCheck(e));