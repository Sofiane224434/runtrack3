const footer = document.querySelector("footer");

window.addEventListener("scroll", function() {
    footer.style.backgroundColor = `rgb(255, ${255 - window.scrollY/15}, ${255 - window.scrollY/15})`;
});