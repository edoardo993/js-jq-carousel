// Creare uno slider di immagini
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utilizziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

$(document).ready(function() {
    $('.fa-angle-right').click(function(){
        $('i.active').removeClass('active').next().addClass('active');
        if($('img.active').hasClass('last')===true){
            $('img.last').removeClass('active');
            $('img.first').addClass('active');
            $('i.last').removeClass('active');
            $('i.first').addClass('active');
        }else{
            $('img.active').removeClass('active').next().addClass('active');
        }
    });
    $('.fa-angle-left').click(function(){
        $('i.active').removeClass('active').prev().addClass('active');
        if($('img.active').hasClass('first')===true){
            $('img.first').removeClass('active');
            $('img.last').addClass('active');
            $('i.first').removeClass('active');
            $('i.last').addClass('active');
        }else{
            $('img.active').removeClass('active').prev().addClass('active');
        }
    });
});