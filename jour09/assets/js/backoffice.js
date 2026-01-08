
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
    if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'modo')) return;

    const adminMenu = document.querySelector('main');
    if (!adminMenu) return;

    // Initialiser si nécessaire
    await initializeUsers();

    // Lire uniquement depuis localStorage
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    const requests = JSON.parse(localStorage.getItem('attendanceRequests')) || [];
    
    // Filtrer les demandes des 7 derniers jours
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const recentRequests = requests.filter(r => r.timestamp >= sevenDaysAgo);
    
    const pendingRequests = recentRequests.filter(r => r.status === 'pending');
    const approvedRequests = recentRequests.filter(r => r.status === 'approved').sort((a, b) => b.timestamp - a.timestamp);
    const rejectedRequests = recentRequests.filter(r => r.status === 'rejected').sort((a, b) => b.timestamp - a.timestamp);
    
    // Pagination
    const itemsPerPage = 5;
    const currentApprovedPage = parseInt(sessionStorage.getItem('approvedPage')) || 1;
    const currentRejectedPage = parseInt(sessionStorage.getItem('rejectedPage')) || 1;
    
    const totalApprovedPages = Math.ceil(approvedRequests.length / itemsPerPage);
    const totalRejectedPages = Math.ceil(rejectedRequests.length / itemsPerPage);
    
    const paginatedApproved = approvedRequests.slice((currentApprovedPage - 1) * itemsPerPage, currentApprovedPage * itemsPerPage);
    const paginatedRejected = rejectedRequests.slice((currentRejectedPage - 1) * itemsPerPage, currentRejectedPage * itemsPerPage);

    adminMenu.innerHTML = `
        <div class="max-w-6xl mx-auto space-y-8">
            <!-- Section demandes de présence -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-4">Demandes de présence en attente</h2>
                ${pendingRequests.length === 0 ? '<p class="text-gray-500">Aucune demande en attente</p>' : `
                    <div class="space-y-2">
                        ${pendingRequests.map(request => `
                            <div class="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded">
                                <div>
                                    <span class="font-semibold">${request.username}</span>
                                    <span class="text-gray-600"> - ${request.date}</span>
                                    <span class="text-sm text-gray-500 ml-2">(${new Date(request.timestamp).toLocaleString('fr-FR')})</span>
                                </div>
                                <div class="space-x-2">
                                    <button class="approveButton bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" data-request-id="${request.id}">
                                        ✅ Accepter
                                    </button>
                                    <button class="rejectButton bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" data-request-id="${request.id}">
                                        ❌ Refuser
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>

            <!-- Historique des demandes -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-4">Historique des demandes (7 derniers jours)</h2>
                
                <div class="mb-6">
                    <h3 class="text-lg font-semibold text-green-700 mb-2">✅ Demandes acceptées (${approvedRequests.length})</h3>
                    ${approvedRequests.length === 0 ? '<p class="text-gray-500 text-sm">Aucune demande acceptée</p>' : `
                        <div class="space-y-1">
                            ${paginatedApproved.map(request => `
                                <div class="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded text-sm">
                                    <div>
                                        <span class="font-semibold">${request.username}</span>
                                        <span class="text-gray-600"> - ${request.date}</span>
                                        <span class="text-xs text-gray-500 ml-2">(${new Date(request.timestamp).toLocaleString('fr-FR')})</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        ${totalApprovedPages > 1 ? `
                            <div class="flex justify-center items-center gap-2 mt-4">
                                <button id="prevApproved" class="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed" ${currentApprovedPage === 1 ? 'disabled' : ''}>
                                    ← Précédent
                                </button>
                                <span class="text-sm text-gray-600">Page ${currentApprovedPage} / ${totalApprovedPages}</span>
                                <button id="nextApproved" class="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed" ${currentApprovedPage === totalApprovedPages ? 'disabled' : ''}>
                                    Suivant →
                                </button>
                            </div>
                        ` : ''}
                    `}
                </div>

                <div>
                    <h3 class="text-lg font-semibold text-red-700 mb-2">❌ Demandes refusées (${rejectedRequests.length})</h3>
                    ${rejectedRequests.length === 0 ? '<p class="text-gray-500 text-sm">Aucune demande refusée</p>' : `
                        <div class="space-y-1">
                            ${paginatedRejected.map(request => `
                                <div class="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded text-sm">
                                    <div>
                                        <span class="font-semibold">${request.username}</span>
                                        <span class="text-gray-600"> - ${request.date}</span>
                                        <span class="text-xs text-gray-500 ml-2">(${new Date(request.timestamp).toLocaleString('fr-FR')})</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        ${totalRejectedPages > 1 ? `
                            <div class="flex justify-center items-center gap-2 mt-4">
                                <button id="prevRejected" class="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed" ${currentRejectedPage === 1 ? 'disabled' : ''}>
                                    ← Précédent
                                </button>
                                <span class="text-sm text-gray-600">Page ${currentRejectedPage} / ${totalRejectedPages}</span>
                                <button id="nextRejected" class="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed" ${currentRejectedPage === totalRejectedPages ? 'disabled' : ''}>
                                    Suivant →
                                </button>
                            </div>
                        ` : ''}
                    `}
                </div>
            </div>

            ${currentUser.role === 'admin' ? `
            <!-- Section gestion des utilisateurs (admin seulement) -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
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
            </div>
            ` : ''}
        </div>
    `;

    // Gérer les demandes de présence
    document.querySelectorAll('.approveButton').forEach(button => {
        button.addEventListener('click', () => handleAttendanceRequest(button.dataset.requestId, 'approved'));
    });

    document.querySelectorAll('.rejectButton').forEach(button => {
        button.addEventListener('click', () => handleAttendanceRequest(button.dataset.requestId, 'rejected'));
    });

    // Gérer la promotion/dégradation des utilisateurs
    document.querySelectorAll('.promoteButton').forEach(button => {
        button.addEventListener('click', handlePromote);
    });

    document.querySelectorAll('.demoteButton').forEach(button => {
        button.addEventListener('click', handleDemote);
    });
    
    // Gérer la pagination des demandes acceptées
    const prevApproved = document.getElementById('prevApproved');
    const nextApproved = document.getElementById('nextApproved');
    if (prevApproved) {
        prevApproved.addEventListener('click', () => {
            sessionStorage.setItem('approvedPage', currentApprovedPage - 1);
            generateAdminMenu();
        });
    }
    if (nextApproved) {
        nextApproved.addEventListener('click', () => {
            sessionStorage.setItem('approvedPage', currentApprovedPage + 1);
            generateAdminMenu();
        });
    }
    
    // Gérer la pagination des demandes refusées
    const prevRejected = document.getElementById('prevRejected');
    const nextRejected = document.getElementById('nextRejected');
    if (prevRejected) {
        prevRejected.addEventListener('click', () => {
            sessionStorage.setItem('rejectedPage', currentRejectedPage - 1);
            generateAdminMenu();
        });
    }
    if (nextRejected) {
        nextRejected.addEventListener('click', () => {
            sessionStorage.setItem('rejectedPage', currentRejectedPage + 1);
            generateAdminMenu();
        });
    }
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

function handleAttendanceRequest(requestId, newStatus) {
    const requests = JSON.parse(localStorage.getItem('attendanceRequests')) || [];
    const requestIndex = requests.findIndex(r => r.id == requestId);
    
    if (requestIndex !== -1) {
        requests[requestIndex].status = newStatus;
        localStorage.setItem('attendanceRequests', JSON.stringify(requests));
        generateAdminMenu();
    }
}