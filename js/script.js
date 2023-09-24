$(document).ready(function(){
    $('.carousel__body').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        speed: 300
      });

    $('.preloader, .overlay').fadeOut(2000);
    var zero = 0;

    $(window).on('scroll', function(){
      $('.promo').toggleClass('hide', $(window).scrollTop() > zero);
      zero = $(window).scrollTop();
    })

    $(".menu__link").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
  
          // Store hash
          var hash = this.hash;
          
          // $('.menu').removeClass('menu_active');
          // $('span').removeClass('active-line');
          // $('body').removeClass('scroll-y');

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
          scrollTop: $(hash).offset().top
          }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
          });
      } // End if
  });

  $('.burger').on('click', function(){
    // $('.menu').toggleClass('menu_active');
    $('span').toggleClass('active-line');
    // $('body').toggleClass('scroll-y');
  })


});


// javascript

const boxesL = document.querySelectorAll('.boxL');
const boxesR = document.querySelectorAll('.boxR');
const boxesB = document.querySelectorAll('.boxB');

window.addEventListener('scroll', checkbox);

function checkbox(){
    const triggerBottom = window.innerHeight / 5 * 4;

    function boxesShow(event){
        event.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
    
            if(boxTop < triggerBottom){
                box.classList.add('show');
            }else{
                box.classList.remove('show');
            }
        });
    }

    boxesShow(boxesL);
    boxesShow(boxesR);
    boxesShow(boxesB);
}