<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reproduction Maquette Grid</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
    
        .header-box { background-color: #a0e0eb; height: 100px; } 
        .main-box { background-color: #9db2e6; height: 150px; }   
        .middle-box { background-color: #c9a0dc; height: 80px; }  
        .footer-box { background-color: #e6b39d; height: 60px; }
    
        .row > div { margin-bottom: 15px; }
    </style>
</head>
<body class="p-4">

    <div class="container border p-3 bg-white">
        <div class="row">
            <div class="col-12">
                <div class="header-box w-100"></div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-4">
                <div class="main-box"></div>
            </div>
            <div class="col-6 col-md-4">
                <div class="main-box"></div>
            </div>
            <div class="col-6 col-md-4">
                <div class="main-box"></div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-8 col-md-8">
                <div class="middle-box"></div>
            </div>
            <div class="col-4 col-md-4">
                <div class="middle-box"></div>
            </div>
        </div>

        <div class="row justify-content-between">
            <div class="col-4 col-md-2">
                <div class="footer-box"></div>
            </div>
            <div class="col-4 col-md-3">
                <div class="footer-box"></div>
            </div>
            <div class="col-4 col-md-2">
                <div class="footer-box"></div>
            </div>
        </div>
    </div>

</body>
</html>