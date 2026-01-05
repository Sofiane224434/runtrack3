<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Création de compte</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.php">Accueil</a></li>
                <li><a href="index.php">Inscription</a></li>
                <li><a href="index.php">Connexion</a></li>
                <li><a href="index.php">Rechercher</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <h1>Création de compte</h1>
        <form action="index.php" method="POST">
            <fieldset>
                <legend>Civilité</legend>
                <label>
                    <input type="radio" name="civilite" value="M" required>
                    Monsieur
                </label>
                <label>
                    <input type="radio" name="civilite" value="Mme" required>
                    Madame
                </label>
                <label>
                    <input type="radio" name="civilite" value="Autre" required>
                    Autre
                </label>
            </fieldset>

            <div>
                <label for="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom" required>
            </div>

            <div>
                <label for="nom">Nom</label>
                <input type="text" id="nom" name="nom" required>
            </div>

            <div>
                <label for="adresse">Adresse</label>
                <input type="text" id="adresse" name="adresse" required>
            </div>

            <div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>

            <div>
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password" required>
            </div>

            <div>
                <label for="password_confirm">Confirmation du mot de passe</label>
                <input type="password" id="password_confirm" name="password_confirm" required>
            </div>

            <fieldset>
                <legend>Passions</legend>
                <label>
                    <input type="checkbox" name="passions[]" value="informatique">
                    Informatique
                </label>
                <label>
                    <input type="checkbox" name="passions[]" value="voyages">
                    Voyages
                </label>
                <label>
                    <input type="checkbox" name="passions[]" value="sport">
                    Sport
                </label>
                <label>
                    <input type="checkbox" name="passions[]" value="lecture">
                    Lecture
                </label>
            </fieldset>

            <button type="submit">Créer mon compte</button>
        </form>
    </section>

    <footer>
        <ul>
            <li><a href="index.php">Accueil</a></li>
            <li><a href="index.php">Inscription</a></li>
            <li><a href="index.php">Connexion</a></li>
            <li><a href="index.php">Rechercher</a></li>
        </ul>
    </footer>
</body>
</html>
