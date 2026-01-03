<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokémon Filter</title>
</head>
<body>
    <form id="form">
        <input type="text" id="id" placeholder="ID">
        <input type="text" id="nom" placeholder="Nom">
        <select id="type">
            <option value="">-- Type --</option>
            <option value="Grass">Plante</option>
            <option value="Poison">Poison</option>
            <option value="Fire">Feu</option>
            <option value="Water">Eau</option>
            <option value="Electric">Électrique</option>
            <option value="Psychic">Psy</option>
            <option value="Flying">Vol</option>
            <option value="Bug">Insecte</option>
            <option value="Normal">Normal</option>
            <option value="Rock">Roche</option>
            <option value="Ground">Sol</option>
            <option value="Fairy">Fée</option>
            <option value="Fighting">Combat</option>
            <option value="Dragon">Dragon</option>
            <option value="Ice">Glace</option>
            <option value="Steel">Acier</option>
            <option value="Ghost">Spectre</option>
            <option value="Dark">Ténèbres</option>
        </select>
        <input type="button" value="Filtrer" id="filter-btn">
    </form>
    <div id="results"></div>
    <script src="script.js"></script>
</body>
</html>