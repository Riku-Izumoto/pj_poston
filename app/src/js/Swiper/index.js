var mySwiper = new Swiper('.index__creator__content__container', {
  loop: true,
  centeredSlides: true,
  speed: 800,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    321: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    960: {
      slidesPerView: 8,
      spaceBetween: 40
    }
  }
});


$(function () {
  var swiper;
  $(window).on('load resize', function () {
    var w = $(window).width();
    if (w <= 960) {
      if (swiper) {
        return;
      } else {
        swiper = new Swiper('.index__flow__container', {
          speed: 800,
          autoplay: {
            delay: 5000,
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: true,
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });
      }
    } else {
      if (swiper) {
        swiper.destroy();
        swiper = undefined;
      }
    }
  });
});
