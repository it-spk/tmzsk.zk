$(document).ready(function(){
    $('.carousel__body').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        speed: 300
      });

    $('.preloader, .overlay').fadeOut(2000);
});