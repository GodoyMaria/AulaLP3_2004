$(document).ready(function(){
    $(".mini").click(function(){
        var arq = $(this).attr("src");

        $("#princ").attr("src", arq);
    });
});