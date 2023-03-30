$('.testimonials').slick({
    dots: true,
    infinite: false,
    // arrows: false,
    prevArrow: '.slide-prev',
    nextArrow: '.slide-next',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  window.addEventListener('load', () => {
    setTimeout(function(){
        $('.loader').remove()
    }, 1000)
  })
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $('.primary-nav').toggleClass("active");
  });

  $(window).scroll(function(){
    var sticky = $('.header'),
    scroll = $(window).scrollTop();
    if (scroll >= 1) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });