

$(window).on('DOMContentLoaded', ()=> {
    const body = $('body');
    body.addClass('preloader-site');
});
$(window).on('load', function() {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});