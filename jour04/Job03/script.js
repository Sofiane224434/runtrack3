document.getElementById("filter-btn").addEventListener("click", function() {
    const id = document.getElementById("id").value;
    const nom = document.getElementById("nom").value;
    const type = document.getElementById("type").value;
    
    fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
            const filtered = data.filter(pokemon => {
                const matchId = id === "" || pokemon.id == id;
                const matchNom = nom === "" || pokemon.name.french.toLowerCase().includes(nom.toLowerCase());
                const matchType = type === "" || pokemon.type.includes(type);
                return matchId && matchNom && matchType;
            });
            
            document.getElementById("results").innerHTML = filtered.map(pokemon => 
                `<div><strong>${pokemon.id}. ${pokemon.name.french}</strong> - ${pokemon.type.join(", ")}</div>`
            ).join("");
        });
});
