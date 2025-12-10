const sequence = [
    "arc1.png",
    "arc2.png",
    "arc3.png",
    "arc4.png",
    "arc5.png",
    "arc6.png"
];

$("#Melanger").click(function () {

    $("#message").html("");
    
    $("#Melanger").text("Mélanger");
    
    $(".droppable-part").each(function() {
        $(this).removeClass("ui-state-highlight");
        $(this).find("img").detach();
    });
    

    $("#draggables-container").empty();
    

    const melange = sequence.slice().sort(() => Math.random() - 0.5);

    for (let i = 0; i < melange.length; i++) {
        const img = $("<img>")
            .attr("src", `./images/${melange[i]}`)
            .addClass("draggable ui-widget-content")
            .draggable({
                revert: "invalid",
                start: function () {
                    $(this).data("original-parent", $(this).parent());
                }
            });

        $("#draggables-container").append(img);
    }
    
    $(".droppable-part").droppable("option", "disabled", false);
});

$(function () {
    $(".draggable").draggable({
        revert: "invalid",
        start: function () {
            $(this).data("original-parent", $(this).parent());
        }
    });
    $(".droppable-part").droppable({
        drop: function (event, ui) {
            if ($(this).find(".draggable").length > 0) {
                var originalParent = ui.draggable.data("original-parent");
                ui.draggable.css({
                    left: 0,
                    top: 0
                });
                return false;
            }


            var originalParent = ui.draggable.data("original-parent");
            ui.draggable.detach().appendTo($(this)).css({
                left: 0,
                top: 0,
                position: "relative"
            });
            $(this).addClass("ui-state-highlight");
            
            checkRainbowOrder();
        },
        over: function () {
            if ($(this).find(".draggable").length > 0) {
                $(this).droppable("option", "disabled", true);
            }
        },
        out: function () {
            $(this).droppable("option", "disabled", false);
        }
    });
});

function checkRainbowOrder() {

    let allFilled = true;
    let currentOrder = [];
    
    for (let i = 1; i <= 6; i++) {
        const img = $(`#drop${i}`).find("img");
        if (img.length === 0) {
            allFilled = false;
            break;
        }

        const src = img.attr("src");
        const filename = src.split("/").pop();
        currentOrder.push(filename);
    }
    

    if (allFilled) {
        let isCorrect = true;
        for (let i = 0; i < sequence.length; i++) {
            if (currentOrder[i] !== sequence[i]) {
                isCorrect = false;
                break;
            }
        }
        
        if (isCorrect) {
            $("#message").html("<p style='font-size: 2em; font-weight: bold; color: green;'>Bravo vous avez réussie !</p>");
        } else {
            $("#message").html("<p style='font-size: 2em; font-weight: bold; color: red;'>Vous avez perdu</p>");
        }
    }
}

