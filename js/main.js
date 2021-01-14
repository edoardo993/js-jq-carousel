$(document).ready(function() {

    //creo una funzione al click sui pallini,
    // in modo da tenerne 'attivato' uno solo
    $('.fa-circle').click(function(){
        $('.fa-circle').removeClass('active');
        $(this).addClass('active');
    });

    // scrivo un ciclo for per aggiungere le fa-circle mettendo delle condizioni
    // cioè che non superino il limite massimo delle slide dichiarato in variabile
    var slideNumber=4;
    for(var x=0; x<slideNumber; x++){
        if(x===0){
            $('div.nav').append('<i class="fas fa-circle active first"></i>')
        }else if(x===slideNumber-1){
            $('div.nav').append('<i class="fas fa-circle last"></i>')
        }else{
            $('div.nav').append('<i class="fas fa-circle"></i>')
        }
    };

    // ho provato anche a farlo senza condizioni, facendo scrivere lo stesso 'testo'
    // per poi modificarlo con addClass successivo
    // for(var x=0; x<slideNumber; x++){
    //     $('div.nav').append('<i class="fas fa-circle"></i>')
    // };
    // $('div.nav i:first-child').addClass('active first');
    // $('div.nav i:last-child').addClass('last');

    // lancio un evento al click sulla freccia destra di scorrimento
    // se l'immagine active ha anche la classe 'last', allora rimuoverò
    // la classe active all'ultima immagine e la metterò alla prima
    // procedo così anche per quanto riguarda i pallini
    $('.fa-angle-right').click(function(){
        if($('img.active').hasClass('last')){
            $('img.last,i.last').removeClass('active');
            $('img.first,i.first').addClass('active');
        }else{
            $('img.active,i.active').removeClass('active').next().addClass('active');
        }
    });

    // faccio la stessa cosa di sopra però con la freccia di sinistra,
    // 'ribaltando' i removeClass e addClass
    $('.fa-angle-left').click(function(){
        if($('img.active').hasClass('first')){
            $('img.first,i.first').removeClass('active');
            $('img.last,i.last').addClass('active');
        }else{
            $('img.active,i.active').removeClass('active').prev().addClass('active');
        }
    });

    // creo una funzione per capire se l'utente sta usando la tastiera,
    // in quel caso verifico il tasto che sta pigiando, se è la freccia
    // a destra o a sinistra allora procedo con le condizioni, sennò
    // non attivo niente
    $(document).on("keydown", keyboardSelected);
    function keyboardSelected(t){
        if(t.keyCode === 37){
            if($('img.active').hasClass('first')){
                $('img.first,i.first').removeClass('active');
                $('img.last,i.last').addClass('active');
            }else{
                $('img.active,i.active').removeClass('active').prev().addClass('active');
            }
        }
        if(t.keyCode === 39){
            if($('img.active').hasClass('last')){
                $('img.last,i.last').removeClass('active');
                $('img.first,i.first').addClass('active');
            }else{
                $('img.active,i.active').removeClass('active').next().addClass('active');
            }
        }
    };
});