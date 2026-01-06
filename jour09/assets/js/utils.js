function generateHeader() {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    const isConnected = currentUser !== null;

    const header = document.querySelector('header');
    if (!header) return;

    let navLinks = '';

    if (isConnected) {
        // Navigation pour utilisateur connecté
        navLinks = `
            <li><a href="index.html" class="text-white hover:text-gray-400">Accueil</a></li>
            <li><a href="calendar.html" class="text-white hover:text-gray-400">Calendrier</a></li>
            ${(currentUser.role === 'admin' || currentUser.role === 'modo') ? '<li><a href="backoffice.html" class="text-white hover:text-gray-400">Backoffice</a></li>' : ''}
            <li><button id="logoutButton" class="text-white hover:text-gray-400">Déconnexion</button></li>
        `;
    } else {
        // Navigation pour utilisateur non connecté
        navLinks = `
            <li><a href="index.html" class="text-white hover:text-gray-400">Accueil</a></li>
            <li><a href="register.html" class="text-white hover:text-gray-400">Inscription</a></li>
            <li><a href="login.html" class="text-white hover:text-gray-400">Connexion</a></li>
        `;
    }

    header.innerHTML = `
        <nav class="bg-gray-800 p-4">
            <ul class="flex space-x-4">
                ${navLinks}
            </ul>
        </nav>
    `;

    // Ajouter l'événement de déconnexion si l'utilisateur est connecté
    if (isConnected) {
        const logoutButton = document.getElementById('logoutButton');
        if (logoutButton) {
            logoutButton.addEventListener('click', function() {
                sessionStorage.removeItem('currentUser');
                window.location.href = 'index.html';
            });
        }
    }
}

// Générer le header au chargement de la page
document.addEventListener('DOMContentLoaded', generateHeader);

async function loadDb() {
    const response = await fetch('assets/data/user.json');
    const users = await response.json();
    return users;
}