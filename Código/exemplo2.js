$(document).ready(function(){
    //$ > construtor (seletor), substitui o document.xxx
    $("#msg").focus(function () {
        var texto = $("#msg").val();

        if (texto == "Digite sua mensagem"){
            $("#msg").val("");
        }
    });

    $("#msg").blur(function () {
        var texto = $("#msg").val();

        if (texto == ""){
            $("#msg").val("Digite sua mensagem");
        }
    });

    $("#enviar").click(function () {
        var texto = $("#msg").val();

        var textoChat = $("#chat").html();

        if (textoChat == "Chat carregando...") {
            $("#chat").html("");
            textoChat = "";
        }
        else {
            textoChat = textoChat + "<br><br>"
        }

        var novoConteudo = textoChat + texto;

        $("#chat").html(novoConteudo);
        $("#msg").val("");
    });
})