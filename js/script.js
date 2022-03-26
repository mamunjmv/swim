$(function(){
    'use strict';
    // menu fix starts
  var navOff = $('.main_menu').offset().top;
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > navOff) {
      $('.main_menu').addClass('menu_fix');
    } else {
      $('.main_menu').removeClass('menu_fix');
    }
  });
  // menu fix end
    // button js starts
$('.btn_part').click(function(){
  $('html,body').animate({
    scrollTop:0,
  }), 2500;
  
  });
  $(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  if (scrollTop > 200){
    $('.btn_part').fadeIn();
  }
  else {
    $('.btn_part').fadeOut();
  }
  });
  // button js end
    var typed = new Typed('.type', {
        strings: ['Our Courses', 'Get the Offer', ],
        typeSpeed:60,
        backSpeed:60,
        loop:true,
       
      });
      $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1500,

      });
      $('.venobox').venobox({
        spinner:'three-bounce',
        closeColor:'red',
    });
    $('.counter').counterUp({
      delay: 10,
      time: 1500
    });
    $('.item').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots:true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    });
    $('.testi_slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]


    });
});