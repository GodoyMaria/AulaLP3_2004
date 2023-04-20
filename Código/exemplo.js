$(document).ready(function(){
    //$ > construtor (seletor), substitui o document.xxx
    $("#f1").click(function () {
        $("#cor").css("color", "red");
    });


    $("#f2").click(function() {
        $("#area").css("width", "500px");
    });

    $("#f3").click(function() {
        $("p", $("#area")).css("background", "black");
    });


    $("#l1").click(function(){
        $("li:first").css("background", "blue");
    });

    $("#l2").click(function(){
        $("li:last").css("background", "pink");
    });

    $("#l3").click(function(){
        $("li:odd").css("background", "gray");
    });

    $("#l4").click(function(){
        $("li:even").css("background", "purple");
    });

    $("#l5").click(function(){
        $("li:eq(3)").css("background", "yellow");
    });


    $("#foto").click(function() {
        var arquivo = $("#foto").attr("src");
        $("#foto").fadeOut("slow");
        alert(arquivo);

        $("#foto").attr("src", "../Barbiee.jpg");
        $("#foto").slideDown("slow");
    });

    $("#foto").mouseover(function() {
        $("#foto").addClass("destaqueFoto")
    });
});

