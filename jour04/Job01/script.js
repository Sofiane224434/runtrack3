document.getElementById("button").addEventListener("click", function() {
    fetch("expression.txt")
        .then(response => response.text())
        .then(data => {
            const p = document.createElement("p");
            p.textContent = data;
            document.body.appendChild(p);
        });
});