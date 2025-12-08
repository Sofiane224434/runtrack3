let button = document.getElementById('button');
let article = null
function showhide() {
    if (article) {
        article.remove()
        article = null
    }
    else {
        article = document.createElement("article")
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage."
        document.body.appendChild(article)
    }
}
button.addEventListener("click", showhide)