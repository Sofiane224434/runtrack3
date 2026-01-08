const chronoElement = document.getElementById("chrono");
const startButton = document.getElementById("start-chrono");
const lapButton = document.getElementById("lap-chrono");
const resetButton = document.getElementById("reset-chrono");

let startTime = 0;
let elapsedTime = 0;
let interval = null;

if (chronoElement) {
    chronoElement.innerHTML = `
    <section>
        <div id="chrono-display">00:00:00:00</div>
    </section>
    `;
}

const displayElement = document.getElementById("chrono-display");

function updateDisplay() {
    const totalMs = elapsedTime + (interval !== null ? Date.now() - startTime : 0);
    
    const hours = Math.floor(totalMs / 3600000);
    const minutes = Math.floor((totalMs % 3600000) / 60000);
    const seconds = Math.floor((totalMs % 60000) / 1000);
    const miniseconds = Math.floor((totalMs % 1000) / 10);
    
    const h = hours.toString().padStart(2, '0');
    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');
    const ms = miniseconds.toString().padStart(2, '0');
    
    if (displayElement) {
        displayElement.textContent = `${h}:${m}:${s}:${ms}`;
        console.log(`${h}:${m}:${s}:${ms}`);
    }
}

function toggleChrono() {
    if (interval === null) {
        startTime = Date.now();
        interval = setInterval(updateDisplay, 10);
        if (startButton) {
            startButton.value = "Arrêter";
            startButton.style.backgroundColor = 'red';
        }
    } else {
        clearInterval(interval);
        elapsedTime += Date.now() - startTime;
        interval = null;
        if (startButton) {
            startButton.value = "Démarrer";
            startButton.style.backgroundColor = '#3b82f6';
        }
    }
}

function resetChrono() {
    clearInterval(interval);
    interval = null;
    startTime = 0;
    elapsedTime = 0;
    if (startButton) {
        startButton.value = "Démarrer";
        startButton.style.backgroundColor = '#3b82f6';
    }
    updateDisplay();
}

// Fonction pour enregistrer le temps dans une liste
function registerChrono() {
    const recordedTimesList = document.getElementById("recorded-times");
    if (recordedTimesList && displayElement) {
        const li = document.createElement("li");
        li.textContent = displayElement.textContent;
        recordedTimesList.appendChild(li);
    }
}

if (startButton) {
    startButton.addEventListener("click", toggleChrono);
}

if (resetButton) {
    resetButton.addEventListener("click", resetChrono);
}

if (lapButton) {
    lapButton.addEventListener("click", registerChrono);
}
