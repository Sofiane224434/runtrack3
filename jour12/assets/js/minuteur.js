const minuteurElement = document.querySelector("main");

let endTime = 0;
let interval = null;

// Créer un son de réveil
const alarmSound = new Audio();
alarmSound.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjGH0fPTgjMGHm7A7+OZURE' + 'MV6zn77dcGAg+ltryxnYpBCqAzvLZiTYIGWm77uedTRAMUKfj8LZjHAY4kNfyzHksBSR3x/DdkEAKFF606+uoVRQKRp/g8r5sIQYxh9Hz04IzBh5uwO/jmFERC1es5++3XBgIPpba8sZ2KQQqf87y2Yk2CBlpu+7nnU0QDFCn4/C2YxwGOJDX8sx5LAUkd8fw3ZBACqfj8rZjHAY4kdfyzHksBSR3x/DdkEAKFF606+uoVRQKRp/g8r5sIQYxh9Hz04IzBh5uwO/jmFERC1es5++3XBgIPpba8sZ2KQQqf87y2Yk2CBlpu+7nnU0QDFCn4/C2YxwGOJDX8sx5LAUkd8fw3ZBACqfj8rZjHAY4kdfyzHksBSR3x/DdkEAKFF606+uoVRQKRp/g8r5sIQYxh9Hz04IzBh5uwO/jmFERC1es5++3XBgIPpba8sZ2KQQqf87y2Yk2CBnz';

// Fonction pour jouer le son 10 fois
function playAlarmMultipleTimes() {
    let count = 0;
    const maxBeeps = 10;
    
    const beepInterval = setInterval(() => {
        alarmSound.currentTime = 0;
        alarmSound.play().catch(e => console.log("Erreur audio:", e));
        count++;
        
        if (count >= maxBeeps) {
            clearInterval(beepInterval);
        }
    }, 400); // Un bip toutes les 400ms
}

if (minuteurElement) {
    minuteurElement.innerHTML = `
        <div>
            <input type="number" id="hours-input" value="0" min="0" placeholder="H" />
            <input type="number" id="minutes-input" value="1" min="0" max="59" placeholder="M" />
            <input type="number" id="seconds-input" value="0" min="0" max="59" placeholder="S" />
        </div>
        <div id="minuteur-display" class="text-4xl font-mono">00:01:00</div>
        <div>
            <input type="button" value="Démarrer" id="start-minuteur" class="mt-4 p-2 bg-blue-500 text-white rounded cursor-pointer" />
            <input type="button" value="Réinitialiser" id="reset-minuteur" class="mt-4 p-2 bg-gray-500 text-white rounded cursor-pointer" />
        </div>
    `;
}

const displayElement = document.getElementById("minuteur-display");
const hoursInput = document.getElementById("hours-input");
const minutesInput = document.getElementById("minutes-input");
const secondsInput = document.getElementById("seconds-input");
const startButton = document.getElementById("start-minuteur");
const resetButton = document.getElementById("reset-minuteur");

function updateDisplay() {
    if (!interval) {
        const h = parseInt(hoursInput?.value || 0);
        const m = parseInt(minutesInput?.value || 0);
        const s = parseInt(secondsInput?.value || 0);
        
        if (displayElement) {
            displayElement.textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
    } else {
        const remaining = Math.max(0, endTime - Date.now());
        
        if (remaining === 0) {
            clearInterval(interval);
            interval = null;
            playAlarmMultipleTimes();
            resetMinuteur();
            return;
        }
        
        const hours = Math.floor(remaining / 3600000);
        const minutes = Math.floor((remaining % 3600000) / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        
        if (displayElement) {
            displayElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }
}

function toggleMinuteur() {
    if (interval === null) {
        const h = parseInt(hoursInput?.value || 0);
        const m = parseInt(minutesInput?.value || 0);
        const s = parseInt(secondsInput?.value || 0);
        
        const totalDuration = (h * 3600 + m * 60 + s) * 1000;
        
        if (totalDuration === 0) return;
        
        endTime = Date.now() + totalDuration;
        interval = setInterval(updateDisplay, 100);
        
        if (startButton) startButton.value = "Pause";
        if (hoursInput) hoursInput.disabled = true;
        if (minutesInput) minutesInput.disabled = true;
        if (secondsInput) secondsInput.disabled = true;
    } else {
        clearInterval(interval);
        const remaining = Math.max(0, endTime - Date.now());
        endTime = Date.now() + remaining;
        interval = null;
        if (startButton) startButton.value = "Reprendre";
    }
}

function resetMinuteur() {
    clearInterval(interval);
    interval = null;
    endTime = 0;
    
    if (hoursInput) { hoursInput.disabled = false; hoursInput.value = 0; }
    if (minutesInput) { minutesInput.disabled = false; minutesInput.value = 1; }
    if (secondsInput) { secondsInput.disabled = false; secondsInput.value = 0; }
    if (startButton) startButton.value = "Démarrer";
    
    updateDisplay();
}

startButton?.addEventListener("click", toggleMinuteur);
resetButton?.addEventListener("click", resetMinuteur);
hoursInput?.addEventListener("input", updateDisplay);
minutesInput?.addEventListener("input", () => {
    if (minutesInput.value > 59) minutesInput.value = 59;
    if (minutesInput.value < 0) minutesInput.value = 0;
    updateDisplay();
});
secondsInput?.addEventListener("input", () => {
    if (secondsInput.value > 59) secondsInput.value = 59;
    if (secondsInput.value < 0) secondsInput.value = 0;
    updateDisplay();
});

updateDisplay();
