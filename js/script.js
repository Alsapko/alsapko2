const swiper = new Swiper('.swiper', {
  // Optional parameters


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true, 
  },

   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoHeight: false,
  slidesPerView: 1,
  slidesPerColumn: 2,
  spaceBetween: 30,
  slidesPerColumnFill: 'column',
  watchOverflow: true,
  breakpoints: {
    576: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    },
    1350: {
        slidesPerView: 4,
    }     
  },
  
      
});

$(document).ready(function() {
    $('.header_burger').click(function() {
        $('.header_burger, .header_menu, .block').toggleClass('active');
        $('body').toggleClass('lock')
    });
});