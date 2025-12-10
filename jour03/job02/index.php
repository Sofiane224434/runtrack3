<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .draggable { width: 100px; height: auto; float: left; position: relative;}
        .droppable {
            position: fixed;
            left: 50%;
            width: 600px;
            height: 300px;
            float: left;
            border: 2px dashed #ccc;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .droppable-part {
            flex: 1;
            height: 100%;
            border-right: 1px solid #eee;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .droppable-part:last-child {
            border-right: none;
        }
        .droppable-part img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <button id="Melanger">Lancer le jeu</button>
    <div id="draggables-container">
        <img class="draggable ui-widget-content" src="./images/arc1.png" alt="arc1">
        <img class="draggable ui-widget-header" src="./images/arc2.png" alt="arc2">
        <img class="draggable ui-widget-content" src="./images/arc3.png" alt="arc3">
        <img class="draggable ui-widget-content" src="./images/arc4.png" alt="arc4">
        <img class="draggable ui-widget-header" src="./images/arc5.png" alt="arc5">
        <img class="draggable ui-widget-content" src="./images/arc6.png" alt="arc6">
    </div>
    <div class="droppable ui-widget-header">
        <div class="droppable-part" id="drop1"></div>
        <div class="droppable-part" id="drop2"></div>
        <div class="droppable-part" id="drop3"></div>
        <div class="droppable-part" id="drop4"></div>
        <div class="droppable-part" id="drop5"></div>
        <div class="droppable-part" id="drop6"></div>
    </div>
    <div id="message"></div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.14.1/jquery-ui.js"></script>
    <script src="./script.js"></script>
</body>
</html>