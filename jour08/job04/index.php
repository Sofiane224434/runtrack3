<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Création de compte</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body class="bg-gray-50 min-h-screen">
    <header class="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <nav class="container mx-auto px-6 py-4">
            <ul class="flex items-center justify-center space-x-8">
                <li>
                    <a href="index.php" class="hover:text-blue-200 transition duration-300 font-medium">
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="index.php" class="hover:text-blue-200 transition duration-300 font-medium">
                        Inscription
                    </a>
                </li>
                <li>
                    <a href="index.php" class="hover:text-blue-200 transition duration-300 font-medium">
                        Connexion
                    </a>
                </li>
                <li>
                    <a href="index.php" class="hover:text-blue-200 transition duration-300 font-medium">
                        Rechercher
                    </a>
                </li>
            </ul>
        </nav>
    </header>

    <section class="container mx-auto px-6 py-12">
        <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
            <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Création de compte</h1>
            
            <form action="index.php" method="POST" class="space-y-6">
                <!-- Civilité -->
                <fieldset class="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-xl border border-blue-200">
                    <legend class="text-lg font-semibold text-gray-700 mb-3 px-2">
                        <i class="fas fa-user-circle text-blue-600 mr-2"></i>Civilité
                    </legend>
                    <div class="flex gap-6">
                        <label class="flex items-center cursor-pointer group">
                            <input type="radio" name="civilite" value="M" required class="w-4 h-4 text-blue-600 focus:ring-blue-500">
                            <span class="ml-2 text-gray-700 group-hover:text-blue-600 transition">Monsieur</span>
                        </label>
                        <label class="flex items-center cursor-pointer group">
                            <input type="radio" name="civilite" value="Mme" required class="w-4 h-4 text-blue-600 focus:ring-blue-500">
                            <span class="ml-2 text-gray-700 group-hover:text-blue-600 transition">Madame</span>
                        </label>
                        <label class="flex items-center cursor-pointer group">
                            <input type="radio" name="civilite" value="Autre" required class="w-4 h-4 text-blue-600 focus:ring-blue-500">
                            <span class="ml-2 text-gray-700 group-hover:text-blue-600 transition">Autre</span>
                        </label>
                    </div>
                </fieldset>

                <!-- Prénom -->
                <div>
                    <label for="prenom" class="block text-sm font-semibold text-gray-700 mb-2">
                        Prénom
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-user text-gray-400"></i>
                        </div>
                        <input type="text" id="prenom" name="prenom" required 
                               class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm hover:shadow-md">
                    </div>
                </div>

                <!-- Nom -->
                <div>
                    <label for="nom" class="block text-sm font-semibold text-gray-700 mb-2">
                        Nom
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-user-tag text-gray-400"></i>
                        </div>
                        <input type="text" id="nom" name="nom" required 
                               class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm hover:shadow-md">
                    </div>
                </div>

                <!-- Adresse -->
                <div>
                    <label for="adresse" class="block text-sm font-semibold text-gray-700 mb-2">
                        Adresse
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-home text-gray-400"></i>
                        </div>
                        <input type="text" id="adresse" name="adresse" required 
                               class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm hover:shadow-md">
                    </div>
                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-envelope text-gray-400"></i>
                        </div>
                        <input type="email" id="email" name="email" required 
                               class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm hover:shadow-md">
                    </div>
                </div>

                <!-- Mot de passe -->
                <div>
                    <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">
                        Mot de passe
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input type="password" id="password" name="password" required 
                               class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm hover:shadow-md">
                    </div>
                </div>

                <!-- Confirmation mot de passe -->
                <div>
                    <label for="password_confirm" class="block text-sm font-semibold text-gray-700 mb-2">
                        Confirmation du mot de passe
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input type="password" id="password_confirm" name="password_confirm" required 
                               class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm hover:shadow-md">
                    </div>
                </div>

                <!-- Passions -->
                <fieldset class="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
                    <legend class="text-lg font-semibold text-gray-700 mb-3 px-2">
                        <i class="fas fa-heart text-pink-600 mr-2"></i>Passions
                    </legend>
                    <div class="grid grid-cols-2 gap-4">
                        <label class="flex items-center cursor-pointer group bg-white p-3 rounded-lg hover:bg-purple-100 transition shadow-sm">
                            <input type="checkbox" name="passions[]" value="informatique" class="w-4 h-4 text-purple-600 rounded focus:ring-purple-500">
                            <i class="fas fa-laptop-code ml-2 mr-2 text-purple-600"></i>
                            <span class="text-gray-700 group-hover:text-purple-700">Informatique</span>
                        </label>
                        <label class="flex items-center cursor-pointer group bg-white p-3 rounded-lg hover:bg-purple-100 transition shadow-sm">
                            <input type="checkbox" name="passions[]" value="voyages" class="w-4 h-4 text-purple-600 rounded focus:ring-purple-500">
                            <i class="fas fa-plane ml-2 mr-2 text-purple-600"></i>
                            <span class="text-gray-700 group-hover:text-purple-700">Voyages</span>
                        </label>
                        <label class="flex items-center cursor-pointer group bg-white p-3 rounded-lg hover:bg-purple-100 transition shadow-sm">
                            <input type="checkbox" name="passions[]" value="sport" class="w-4 h-4 text-purple-600 rounded focus:ring-purple-500">
                            <i class="fas fa-basketball-ball ml-2 mr-2 text-purple-600"></i>
                            <span class="text-gray-700 group-hover:text-purple-700">Sport</span>
                        </label>
                        <label class="flex items-center cursor-pointer group bg-white p-3 rounded-lg hover:bg-purple-100 transition shadow-sm">
                            <input type="checkbox" name="passions[]" value="lecture" class="w-4 h-4 text-purple-600 rounded focus:ring-purple-500">
                            <i class="fas fa-book ml-2 mr-2 text-purple-600"></i>
                            <span class="text-gray-700 group-hover:text-purple-700">Lecture</span>
                        </label>
                    </div>
                </fieldset>

                <!-- Bouton de soumission -->
                <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <i class="fas fa-user-plus mr-2"></i>Créer mon compte
                </button>
            </form>
        </div>
    </section>

    <footer class="bg-gray-800 text-white mt-16">
        <div class="container mx-auto px-6 py-8">
            <ul class="flex items-center justify-center space-x-10">
                <li>
                    <a href="index.php" class="hover:text-blue-400 transition duration-300 font-medium">
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="index.php" class="hover:text-blue-400 transition duration-300 font-medium">
                        Inscription
                    </a>
                </li>
                <li>
                    <a href="index.php" class="hover:text-blue-400 transition duration-300 font-medium">
                        Connexion
                    </a>
                </li>
                <li>
                    <a href="index.php" class="hover:text-blue-400 transition duration-300 font-medium">
                        Rechercher
                    </a>
                </li>
            </ul>
            <p class="text-center mt-4 text-gray-400 text-sm">
                © 2026 - Tous droits réservés
            </p>
        </div>
    </footer>
</body>
</html>
