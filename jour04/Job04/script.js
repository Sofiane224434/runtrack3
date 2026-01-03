const updateBtn = document.getElementById('updateBtn');
const usersTableBody = document.getElementById('usersTableBody');

function updateUsersTable() {
    usersTableBody.innerHTML = '<tr><td colspan="4" class="message">Chargement...</td></tr>';
    
    fetch('users.php')
        .then(response => response.ok ? response.json() : Promise.reject('Erreur'))
        .then(data => {
            usersTableBody.innerHTML = data.length === 0 
                ? '<tr><td colspan="4" class="message empty">Aucun utilisateur trouvé</td></tr>'
                : data.map(user => `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.nom}</td>
                        <td>${user.prenom}</td>
                        <td>${user.email}</td>
                    </tr>
                `).join('');
        })
        .catch(error => {
            console.error('Erreur:', error);
            usersTableBody.innerHTML = '<tr><td colspan="4" class="message error">Erreur lors du chargement des utilisateurs</td></tr>';
        });
}

updateBtn.addEventListener('click', updateUsersTable);
