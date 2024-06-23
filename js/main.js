$(document).ready(function() {
    $('#carousel-imagens').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });
});