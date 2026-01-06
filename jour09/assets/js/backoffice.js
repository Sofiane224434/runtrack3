
async function initializeUsers() {
    if (!localStorage.getItem('usersInitialized')) {
        const usersFromJson = await loadDb();
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        
        // Fusionner sans doublons
        const mergedUsers = [...usersFromJson];
        existingUsers.forEach(user => {
            if (!mergedUsers.find(u => u.email === user.email)) {
                mergedUsers.push(user);
            }
        });
        
        localStorage.setItem('users', JSON.stringify(mergedUsers));
        localStorage.setItem('usersInitialized', 'true');
    }
}

async function generateAdminMenu() {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    if (!currentUser || currentUser.role !== 'admin') return;

    const adminMenu = document.querySelector('main');
    if (!adminMenu) return;

    // Initialiser si nécessaire
    await initializeUsers();

    // Lire uniquement depuis localStorage
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];

    adminMenu.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">Liste des utilisateurs</h2>
        <table class="w-full border-collapse border border-gray-300">
            <thead class="bg-gray-200">
                <tr>
                    <th class="border border-gray-300 p-2">Email</th>
                    <th class="border border-gray-300 p-2">Username</th>
                    <th class="border border-gray-300 p-2">Rôle</th>
                    <th class="border border-gray-300 p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                ${allUsers.map(user => `
                    <tr class="hover:bg-gray-100">
                        <td class="border border-gray-300 p-2">${user.email}</td>
                        <td class="border border-gray-300 p-2">${user.username}</td>
                        <td class="border border-gray-300 p-2">${user.role}</td>
                        <td class="border border-gray-300 p-2">
                            ${user.role === 'user' ? `<button class="promoteButton bg-blue-500 text-white px-4 py-2 rounded" data-username="${user.username}">Promouvoir</button>` : ''}
                            ${user.role === 'modo' ? `<button class="demoteButton bg-red-500 text-white px-4 py-2 rounded" data-username="${user.username}">Rétrograder</button>` : ''}
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    document.querySelectorAll('.promoteButton').forEach(button => {
        button.addEventListener('click', handlePromote);
    });

    document.querySelectorAll('.demoteButton').forEach(button => {
        button.addEventListener('click', handleDemote);
    });
}

// Appeler la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', generateAdminMenu);

function handlePromote(event) {
    const username = event.target.dataset.username;
    
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    const userIndex = allUsers.findIndex(u => u.username === username);
    
    if (userIndex !== -1) {
        allUsers[userIndex].role = 'modo';
        localStorage.setItem('users', JSON.stringify(allUsers));
        generateAdminMenu();
    }
}

function handleDemote(event) {
    const username = event.target.dataset.username;
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    const userIndex = allUsers.findIndex(u => u.username === username);
    if (userIndex !== -1) {
        allUsers[userIndex].role = 'user';
        localStorage.setItem('users', JSON.stringify(allUsers));
        generateAdminMenu();
    }
}