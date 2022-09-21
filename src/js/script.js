$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/right.png"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
