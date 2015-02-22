$(document).ready(function() {
    load(20);
    hoverEvent();

    $("#reset").on("click", function() {
        $(".square").remove();
        var size = +prompt("Please enter a new size", 20);
        load(size);
        hoverEvent();
    });
});

function hoverEvent() {
    $(".square").on("mouseenter", function() {
        $(this).addClass("hover");
    });
}

function load(size) {
    var sq_size = 640 / size;
    for(var i = 0; i < size; i++) {
        for(var j = 0; j < size; j++) {
            $("#grid").append("<div class='square'></div>");
        }
    }
    $(".square").css({"width": sq_size, "height": sq_size});
}