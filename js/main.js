$(document).ready(function() {
    $('.fa-angle-right').click(function(){
        $('img.active').removeClass('active').next().addClass('active');
    });

    $('.fa-angle-left').click(function(){
        $('img.active').removeClass('active').prev().addClass('active');
    });
});