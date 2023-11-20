//Crie a variável de data
var date = new Date()
let display_date= "Data: " + date.toLocaleDateString('pt-BR', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'})

//Carregue o DOM HTML
$(document).ready()


//Defina a variável para armazenar a emoção prevista
let predicted_emotion;

//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//seletor jQuery e ação de clique
$(function () {
    $("#predict_button").click(function () {
        //Guarde informação digitada

        //Chamada ajax
        $.ajax({
            type: '',
            url: " ",
            data:  ,
            dataType: " ",
            contentType: ' ',
            success: function (result) {
               
               // Resultado recebido do Flask ----->JavaScript
                
               // Exibir resultado usando JavaScript----->HTML
            
            },
            error: function (result) {
                
            }
        });
    });
})


