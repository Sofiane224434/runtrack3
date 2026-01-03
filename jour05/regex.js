const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
const firstNameRegex = /^[a-zA-ZÀ-ÿ\s-]{2,50}$/;
const lastNameRegex = /^[a-zA-ZÀ-ÿ\s-]{2,50}$/;
const addressRegex = /^[a-zA-Z0-9À-ÿ\s,'-]{5,100}$/;
const postalCodeRegex = /^[0-9]{5}$/;

// explication de chaque regex dans un commentaire
// emailRegex : Vérifie que l'email est au format standard (ex: utilisateur@domaine.com)
// passwordRegex : Vérifie que le mot de passe contient au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial
// firstNameRegex : Vérifie que le prénom contient entre 2 et 50 caractères (lettres, espaces ou tirets uniquement)
// lastNameRegex : Vérifie que le nom contient entre 2 et 50 caractères (lettres, espaces ou tirets uniquement)
// addressRegex : Vérifie que l'adresse contient entre 5 et 100 caractères (lettres, chiffres, espaces, virgules, apostrophes ou tirets)
// postalCodeRegex : Vérifie que le code postal contient exactement 5 chiffres

function effacerToutesLesErreurs() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
}

function afficherErreur(fieldId, message) {
    const errorDiv = document.getElementById(`error-${fieldId}`);
    if (errorDiv) {
        errorDiv.textContent = message;
    }
}

document.getElementById("validateButton").addEventListener("click", async function(event) {
    event.preventDefault();

    effacerToutesLesErreurs();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const firstNameField = document.getElementById("firstName");
    const lastNameField = document.getElementById("lastName");
    const addressField = document.getElementById("address");
    const postalCodeField = document.getElementById("postalCode");

    const validations = await Promise.all([
        (async () => {
            if (email === "") {
                afficherErreur("email", "Veuillez remplir ce champ.");
                return false;
            } else if (!emailRegex.test(email)) {
                afficherErreur("email", "Format d'email invalide.");
                return false;
            }
            return true;
        })(),
        (async () => {
            if (password === "") {
                afficherErreur("password", "Veuillez remplir ce champ.");
                return false;
            } else if (!passwordRegex.test(password)) {
                afficherErreur("password", "Le mot de passe doit contenir au moins 8 caractères dont une majuscule, une minuscule, un chiffre et un caractère spécial.");
                return false;
            }
            return true;
        })(),
        (async () => {
            if (firstNameField) {
                const firstName = firstNameField.value.trim();
                if (firstName === "") {
                    afficherErreur("firstName", "Veuillez remplir ce champ.");
                    return false;
                } else if (!firstNameRegex.test(firstName)) {
                    afficherErreur("firstName", "Le prénom doit contenir entre 2 et 50 caractères (lettres, espaces ou tirets uniquement).");
                    return false;
                }
            }
            return true;
        })(),
        (async () => {
            if (lastNameField) {
                const lastName = lastNameField.value.trim();
                if (lastName === "") {
                    afficherErreur("lastName", "Veuillez remplir ce champ.");
                    return false;
                } else if (!lastNameRegex.test(lastName)) {
                    afficherErreur("lastName", "Le nom doit contenir entre 2 et 50 caractères (lettres, espaces ou tirets uniquement).");
                    return false;
                }
            }
            return true;
        })(),
        (async () => {
            if (addressField) {
                const address = addressField.value.trim();
                if (address === "") {
                    afficherErreur("address", "Veuillez remplir ce champ.");
                    return false;
                } else if (!addressRegex.test(address)) {
                    afficherErreur("address", "L'adresse doit contenir entre 5 et 100 caractères.");
                    return false;
                }
            }
            return true;
        })(),
        (async () => {
            if (postalCodeField) {
                const postalCode = postalCodeField.value.trim();
                if (postalCode === "") {
                    afficherErreur("postalCode", "Veuillez remplir ce champ.");
                    return false;
                } else if (!postalCodeRegex.test(postalCode)) {
                    afficherErreur("postalCode", "Le code postal doit contenir exactement 5 chiffres.");
                    return false;
                }
            }
            return true;
        })()
    ]);

    // Vérifie si toutes les validations ont réussi
    // validations est un tableau de booléens, every() retourne true si tous les éléments sont true
    const isValid = validations.every(result => result === true);

    if (isValid) {
        effacerToutesLesErreurs();
        await new Promise(resolve => setTimeout(resolve, 200));
        alert("Tous les champs sont valides !");
        // Vous pouvez soumettre le formulaire ici si nécessaire avec fetch ou XMLHttpRequest
    }
});