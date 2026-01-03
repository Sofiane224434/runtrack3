<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LaPlateforme_ Reproduction</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        /* To refine image details */
        .bg-custom-grey { background-color: #e9ecef; }
        .progress-bar-striped { background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent); }
    </style>
</head>
<body class="bg-body-secondary">
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-1">
        <div class="container-fluid">
            <a class="navbar-brand fs-6" href="#">LPTF</a>
            <button class="navbar-toggler navbar-toggler-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse show" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active small" aria-current="page" href="https://laplateforme.io" id="lien-accueil">Accueil</a>
                    <a class="nav-link small" href="#">Units</a>
                    <a class="nav-link small" href="#">Jobs</a>
                    <a class="nav-link disabled small" href="#" tabindex="-1" aria-disabled="true">Skills</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container text-center">
        <h1 class="display-6">LaPlateforme_</h1>
    </div>

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-3">
                <div class="card rounded-0">
                    <img src="assets/img/papillon.webp" class="card-img-top" alt="Butterfly">
                    <div class="card-body">
                        <h5 class="card-title">A Butterfly</h5>
                        <p class="card-text small text-secondary">A butterfly is kind of like a caterpillar, but with wings. Do not ingest.</p>
                        <a href="#" class="btn btn-primary btn-sm w-100" id="btn-butterfly">Order your own butterfly</a>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="p-4 bg-custom-grey rounded-3 shadow-sm h-100" id="jumbotron">
                    <h2 class="display-5" id="jumbotron-title">Hello, world!</h2>
                    <div id="jumbotron-content">
                        <p class="lead small">There are several views of the term:</p>
                        <p class="small">the world is matter, space and phenomena accessible to us through the senses, experience or reason.</p>
                        <p class="small">The most common sense refers to our planet, Earth, with its inhabitants, and its more or less natural environment.</p>
                        <hr class="my-4">
                        <p class="small">The extended sense refers to the universe as a whole.</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-danger me-2" id="btn-reboot">Reboot the World</button>
                        <div class="spinner-border text-info spinner-border-sm" id="spinner" role="status"></div>
                    </div>
                    
                    <nav class="mt-4">
                        <ul class="pagination pagination-sm justify-content-end mb-0" id="pagination">
                            <li class="page-item"><a class="page-link" href="#" data-page="prev">«</a></li>
                            <li class="page-item active"><a class="page-link" href="#" data-page="1">1</a></li>
                            <li class="page-item"><a class="page-link" href="#" data-page="2">2</a></li>
                            <li class="page-item"><a class="page-link" href="#" data-page="3">3</a></li>
                            <li class="page-item"><a class="page-link" href="#" data-page="next">»</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="col-md-3">
                <div class="list-group shadow-sm small">
                    <a href="#" class="list-group-item list-group-item-action active">Limbo</a>
                    <a href="#" class="list-group-item list-group-item-action">Lust</a>
                    <a href="#" class="list-group-item list-group-item-action">Gluttony</a>
                    <a href="#" class="list-group-item list-group-item-action">Greed</a>
                    <a href="#" class="list-group-item list-group-item-action">Wrath</a>
                    <a href="#" class="list-group-item list-group-item-action">Heresy</a>
                    <a href="#" class="list-group-item list-group-item-action">Violence</a>
                    <a href="#" class="list-group-item list-group-item-action">Fraud</a>
                    <a href="#" class="list-group-item list-group-item-action">Treachery</a>
                    <a href="#" class="list-group-item list-group-item-action">Internet Explorer</a>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <button class="btn btn-sm btn-outline-secondary" id="btn-progress-minus">←</button>
                    <p class="text-center fw-bold mb-0 small flex-grow-1">Installing AI 9000</p>
                    <button class="btn btn-sm btn-outline-secondary" id="btn-progress-plus">→</button>
                </div>
                <div class="progress" style="height: 15px;">
                    <div class="progress-bar progress-bar-striped bg-warning" id="progress-bar" role="progressbar" style="width: 75%"></div>
                </div>
            </div>
        </div>

        <div class="row mt-4 pb-5">
            <div class="col-md-6">
                <h6 class="mb-3">Receive your free copy of Internet 2!</h6>
                <div class="input-group mb-2">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" placeholder="Login" id="form-login">
                </div>
                <div class="input-group mb-2">
                    <input type="password" class="form-control" placeholder="Password" id="form-password-left">
                    <span class="input-group-text">@example.com</span>
                </div>
                <div class="input-group mb-2">
                    <span class="input-group-text">Internet 2 and 2.1 Beta URL</span>
                    <input type="text" class="form-control" placeholder="DogeCoin" id="form-url">
                    <span class="input-group-text">.00</span>
                </div>
                <div class="input-group mb-2">
                    <span class="input-group-text">https://l33t.lptf/dkwb/berlusconimkt/</span>
                    <input type="text" class="form-control" id="form-url2">
                </div>
            </div>

            <div class="col-md-6 d-flex flex-column align-items-end">
                <div style="width: 80%;">
                    <label class="form-label small">Email address</label>
                    <input type="email" class="form-control mb-1" id="form-email">
                    <div class="form-text small mb-2">We'll never share your email with anyone else.</div>
                    
                    <label class="form-label small">Password</label>
                    <input type="password" class="form-control mb-2" id="form-password">
                    
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="checkbox" id="check">
                        <label class="form-check-label small" for="check">Check me out</label>
                    </div>
                    <button class="btn btn-primary btn-sm" id="btn-submit">Submit</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modale pour l'achat du papillon -->
    <div class="modal fade" id="butterflyModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Confirmation d'achat</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>Votre papillon a bien été commandé !</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modale pour les informations du formulaire (touches D-G-C) -->
    <div class="modal fade" id="formInfoModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Informations du formulaire</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body" id="form-info-content">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>