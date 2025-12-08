function addza(e) {
    let textarea = document.getElementById("keylogger");
    if (textarea.activeElement) {
        textarea.value = textarea.value + 2 * e.key;
    }
    else {
        textarea.value = textarea.value + e.key;
    }
}
window.addEventListener("keypress", (e) => addza(e));