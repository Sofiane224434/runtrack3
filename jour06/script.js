$(document).ready(function() {
    
    // ===== 1. Le lien Accueil mène vers le site de La Plateforme =====
    // Déjà fait dans l'HTML avec href="https://laplateforme.io"
    
    
    // ===== 2. Bouton papillon affiche une modale =====
    $('#btn-butterfly').on('click', function(e) {
        e.preventDefault();
        var butterflyModal = new bootstrap.Modal(document.getElementById('butterflyModal'));
        butterflyModal.show();
    });
    
    
    // ===== 3. Bouton "Reboot the World" affiche une citation Blade Runner =====
    const bladeRunnerQuotes = [
        "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion.",
        "All those moments will be lost in time, like tears in rain. Time to die.",
        "It's too bad she won't live! But then again, who does?",
        "I want more life, father.",
        "Replicants are like any other machine - they're either a benefit or a hazard.",
        "If only you could see what I've seen with your eyes.",
        "Quite an experience to live in fear, isn't it? That's what it is to be a slave.",
        "Wake up! Time to die!",
        "I've had people walk out on me before, but not when I was being so charming.",
        "You're in a desert, walking along in the sand when all of a sudden you look down..."
    ];
    
    $('#btn-reboot').on('click', function() {
        const randomQuote = bladeRunnerQuotes[Math.floor(Math.random() * bladeRunnerQuotes.length)];
        $('#jumbotron-title').text('Blade Runner');
        $('#jumbotron-content').html('<p class="lead small">' + randomQuote + '</p>');
    });
    
    
    // ===== 4. La pagination modifie le contenu du jumbotron =====
    const paginationContent = {
        1: {
            title: "Hello, world!",
            content: `
                <p class="lead small">There are several views of the term:</p>
                <p class="small">the world is matter, space and phenomena accessible to us through the senses, experience or reason.</p>
                <p class="small">The most common sense refers to our planet, Earth, with its inhabitants, and its more or less natural environment.</p>
                <hr class="my-4">
                <p class="small">The extended sense refers to the universe as a whole.</p>
            `
        },
        2: {
            title: "La Plateforme",
            content: `
                <p class="lead small">Une école d'un nouveau genre</p>
                <p class="small">La Plateforme_ est une école qui forme aux métiers du numérique.</p>
                <p class="small">Notre pédagogie est basée sur la pratique et les projets concrets.</p>
                <hr class="my-4">
                <p class="small">Nous formons des développeurs, des designers et des experts en cybersécurité.</p>
            `
        },
        3: {
            title: "L'Avenir du Code",
            content: `
                <p class="lead small">Programmer demain</p>
                <p class="small">Le code est partout, dans nos téléphones, nos voitures, nos maisons.</p>
                <p class="small">Apprendre à coder, c'est comprendre le monde qui nous entoure.</p>
                <hr class="my-4">
                <p class="small">C'est aussi avoir les clés pour le transformer.</p>
            `
        }
    };
    
    let currentPage = 1;
    
    $('#pagination').on('click', '.page-link', function(e) {
        e.preventDefault();
        const pageAttr = $(this).data('page');
        
        if (pageAttr === 'prev') {
            currentPage = currentPage > 1 ? currentPage - 1 : 3;
        } else if (pageAttr === 'next') {
            currentPage = currentPage < 3 ? currentPage + 1 : 1;
        } else {
            currentPage = parseInt(pageAttr);
        }
        
        // Mettre à jour le contenu
        $('#jumbotron-title').text(paginationContent[currentPage].title);
        $('#jumbotron-content').html(paginationContent[currentPage].content);
        
        // Mettre à jour l'état actif
        $('#pagination .page-item').removeClass('active');
        $('#pagination .page-link[data-page="' + currentPage + '"]').parent().addClass('active');
    });
    
    
    // ===== 5. Cliquer sur un élément de la liste groupée le rend actif =====
    $('.list-group-item').on('click', function(e) {
        e.preventDefault();
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
    });
    
    
    // ===== 6. Boutons progress bar +/- =====
    let progressValue = 75;
    
    $('#btn-progress-plus').on('click', function() {
        progressValue = Math.min(100, progressValue + 5);
        $('#progress-bar').css('width', progressValue + '%');
    });
    
    $('#btn-progress-minus').on('click', function() {
        progressValue = Math.max(0, progressValue - 5);
        $('#progress-bar').css('width', progressValue + '%');
    });
    
    
    // ===== 7. Touches D-G-C affichent une modale avec les infos du formulaire =====
    let keySequence = [];
    const targetSequence = ['d', 'g', 'c'];
    
    $(document).on('keydown', function(e) {
        const key = e.key.toLowerCase();
        keySequence.push(key);
        
        // Garder seulement les 3 dernières touches
        if (keySequence.length > 3) {
            keySequence.shift();
        }
        
        // Vérifier si la séquence correspond
        if (keySequence.length === 3 && 
            keySequence[0] === 'd' && 
            keySequence[1] === 'g' && 
            keySequence[2] === 'c') {
            
            // Récupérer les valeurs du formulaire
            const login = $('#form-login').val() || 'Non renseigné';
            const passwordLeft = $('#form-password-left').val() ? '***' : 'Non renseigné';
            const url = $('#form-url').val() || 'Non renseigné';
            const url2 = $('#form-url2').val() || 'Non renseigné';
            
            // Afficher dans la modale
            $('#form-info-content').html(`
                <p><strong>Login:</strong> ${login}</p>
                <p><strong>Password:</strong> ${passwordLeft}</p>
                <p><strong>URL:</strong> ${url}</p>
                <p><strong>URL 2:</strong> ${url2}</p>
            `);
            
            const formInfoModal = new bootstrap.Modal(document.getElementById('formInfoModal'));
            formInfoModal.show();
            
            // Réinitialiser la séquence
            keySequence = [];
        }
    });
    
    
    // ===== 8. Valider le formulaire change la couleur du spinner =====
    $('#btn-submit').on('click', function(e) {
        e.preventDefault();
        
        const email = $('#form-email').val();
        const password = $('#form-password').val();
        
        if (email.trim() !== '' && password.trim() !== '') {
            const colors = ['text-primary', 'text-secondary', 'text-success', 'text-danger', 
                          'text-warning', 'text-info', 'text-dark'];
            
            // Retirer toutes les classes de couleur
            $('#spinner').removeClass('text-primary text-secondary text-success text-danger text-warning text-info text-dark');
            
            // Ajouter une couleur aléatoire
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            $('#spinner').addClass(randomColor);
        }
    });
    
});
