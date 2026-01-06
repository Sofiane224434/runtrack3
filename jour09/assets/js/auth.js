const usernameRegex = /^.+$/; 
const emailRegex = /^[\w.-]+@laplateforme\.io$/i;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

// explication de chaque regex dans un commentaire
// emailRegex : Vérifie que l'email appartient au domaine @laplateforme.io
// passwordRegex : Vérifie que le mot de passe contient au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial

function effacerToutesLesErreurs() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
}

function afficherErreur(fieldId, message) {
    const errorDiv = document.getElementById(`error-${fieldId}`);
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.color = "red";
    }
}

const validateButton = document.getElementById("validateButton");
if (validateButton) {
    validateButton.addEventListener("click", async function(event) {
        event.preventDefault();

        effacerToutesLesErreurs();

        let validations;

        // tout depend de si je suis dans register.html ou login.html
        if (window.location.pathname.endsWith("login.html")) {
            const login = document.getElementById("login").value.trim();
            const password = document.getElementById("password").value.trim();

            // Vérifications de base
            validations = await Promise.all([
                (async () => {
                    if (login === "") {
                        afficherErreur("login", "Veuillez remplir ce champ.");
                        return false;
                    }
                    return true;
                })(),
                (async () => {
                    if (password === "") {
                        afficherErreur("password", "Veuillez remplir ce champ.");
                        return false;
                    }
                    return true;
                })()
            ]);

            const isValid = validations.every(result => result === true);
            if (!isValid) {
                return;
            }

            // Récupérer tous les utilisateurs (localStorage + user.json)
            const localUsers = JSON.parse(localStorage.getItem("users")) || [];
            let allUsers = [...localUsers];
            
            // Charger aussi les utilisateurs de user.json
            try {
                const response = await fetch('assets/data/user.json');
                if (response.ok) {
                    const jsonUsers = await response.json();
                    allUsers = [...allUsers, ...jsonUsers];
                }
            } catch (error) {
                console.error("Erreur lors de la lecture de user.json:", error);
            }
            
            // Vérifier si l'utilisateur existe (avec ou sans bon mot de passe)
            const userExists = allUsers.find(u => u.email === login || u.username === login);
            
            if (!userExists) {
                afficherErreur("login", "Cet utilisateur n'existe pas.");
                return;
            }
            
            // Vérifier si le mot de passe est correct
            const user = allUsers.find(u => (u.email === login || u.username === login) && u.password === password);
            
            if (user) {
                sessionStorage.setItem("currentUser", JSON.stringify(user));
                window.location.href = "index.html";
            } else {
                afficherErreur("password", "Mot de passe incorrect.");
            }
        } else {
            // Page d'inscription
            const username = document.getElementById("username")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            const password = document.getElementById("password")?.value;
            const confirmPassword = document.getElementById("confirm_password")?.value;

            validations = await Promise.all([
                (async () => {
                    if (!username || username === "") {
                        afficherErreur("username", "Veuillez remplir ce champ.");
                        return false;
                    }
                    
                    if (!usernameRegex.test(username)) {
                        afficherErreur("username", "Nom d'utilisateur invalide.");
                        return false;
                    }
                    
                    // Vérifier les doublons dans localStorage
                    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
                    if (localUsers.find(u => u.username === username)) {
                        afficherErreur("username", "Ce nom d'utilisateur est déjà pris.");
                        return false;
                    }
                    
                    // Vérifier les doublons dans user.json
                    try {
                        const response = await fetch('assets/data/user.json');
                        if (response.ok) {
                            const jsonUsers = await response.json();
                            if (jsonUsers.find(u => u.username === username)) {
                                afficherErreur("username", "Ce nom d'utilisateur est déjà pris.");
                                return false;
                            }
                        }
                    } catch (error) {
                        console.error("Erreur lors de la lecture de user.json:", error);
                    }
                    
                    return true;
                })(),
                (async () => {
                    if (!email || email === "") {
                        afficherErreur("email", "Veuillez remplir ce champ.");
                        return false;
                    }
                    
                    // Vérifier d'abord si c'est un email valide en général
                    const generalEmailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
                    if (!generalEmailRegex.test(email)) {
                        afficherErreur("email", "Format d'email invalide.");
                        return false;
                    }
                    
                    // Puis vérifier si c'est du domaine laplateforme.io
                    if (!emailRegex.test(email)) {
                        afficherErreur("email", "L'email doit appartenir au domaine @laplateforme.io");
                        return false;
                    }
                    
                    // Vérifier les doublons dans localStorage
                    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
                    if (localUsers.find(u => u.email === email)) {
                        afficherErreur("email", "Cet email est déjà utilisé.");
                        return false;
                    }
                    
                    // Vérifier les doublons dans user.json
                    try {
                        const response = await fetch('assets/data/user.json');
                        if (response.ok) {
                            const jsonUsers = await response.json();
                            if (jsonUsers.find(u => u.email === email)) {
                                afficherErreur("email", "Cet email est déjà utilisé.");
                                return false;
                            }
                        }
                    } catch (error) {
                        console.error("Erreur lors de la lecture de user.json:", error);
                    }
                    
                    return true;
                })(),
                (async () => {
                    if (!password || password === "") {
                        afficherErreur("password", "Veuillez remplir ce champ.");
                        return false;
                    } else if (!passwordRegex.test(password)) {
                        afficherErreur("password", "Le mot de passe doit contenir au moins 8 caractères dont une majuscule, une minuscule, un chiffre et un caractère spécial.");
                        return false;
                    }
                    return true;
                })(),
                (async () => {
                    if (!confirmPassword || confirmPassword === "") {
                        afficherErreur("confirm_password", "Veuillez remplir ce champ.");
                        return false;
                    } else if (confirmPassword !== password) {
                        afficherErreur("confirm_password", "Les mots de passe ne correspondent pas.");
                        return false;
                    }
                    return true;
                })()
            ]);

            const isValid = validations.every(result => result === true);
            if (isValid) {
                const users = JSON.parse(localStorage.getItem("users")) || [];
                const newUser = {
                    id: Date.now(),
                    username,
                    email,
                    password,
                    role: "user"
                };
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                window.location.href = "login.html";

            }
        }
    });
}