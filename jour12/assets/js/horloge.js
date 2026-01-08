// Ajouter un zéro devant les nombres < 10
function formatNumber(num) {
return num < 10 ? "0" + num : num;
}

// Mettre à jour l'horloge toutes les secondes
function updateClock() {
const now = new Date();
const hours = formatNumber(now.getHours());
const minutes = formatNumber(now.getMinutes());
const seconds = formatNumber(now.getSeconds());
const date = formatNumber(now.getDate());
const month = formatNumber(now.getMonth() + 1);
const year = now.getFullYear();
const timeString = `${hours}:${minutes}:${seconds}`;
const dateString = `${date}/${month}/${year}`;
const clockElement = document.getElementById("horloge");
if (clockElement) {
    clockElement.innerHTML = `
    <section>
        <div>${timeString}</div>
        <div class="text-sm">${dateString}</div>
    </section>
    `;
}
}

setInterval(updateClock, 1000); // Met à jour chaque seconde
updateClock(); // Initialiser immédiatement l'horloge