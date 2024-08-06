// let screenWidth = window.innerWidth;
// if (screenWidth < 480) {
$(document).ready(function () {
  $('.slider__wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    dotsClass: 'slick-dots',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});
// } else if (screenWidth >= 480 && screenWidth < 768) {
//   $(document).ready(function () {
//     $('.slider__wrapper').slick({
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       arrows: true,
//       dots: true,
//       dotsClass: 'slick-dots',
//     });
//   });
// } else if (screenWidth >= 768 && screenWidth < 1280) {
//   $(document).ready(function () {
//     $('.slider__wrapper').slick({
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       arrows: true,
//       dots: true,
//       dotsClass: 'slick-dots',
//     });
//   });
// } else {
//   $(document).ready(function () {
//     $('.slider__wrapper').slick({
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       arrows: true,
//       dots: true,
//       dotsClass: 'slick-dots',
//     });
//   });
// }

// window.addEventListener('resize', () => {
//   screenWidth = window.innerWidth;

//   if (screenWidth < 480) {
//     $('.slider__wrapper').slick('slickSetOption', 'slidesToShow', 1, true);
//     $('.slider__wrapper').slick('slickSetOption', 'slidesToScroll', 1, true);
//   } else if (screenWidth >= 480 && screenWidth < 768) {
//     $('.slider__wrapper').slick('slickSetOption', 'slidesToShow', 2, true);
//     $('.slider__wrapper').slick('slickSetOption', 'slidesToScroll', 1, true);
//   } else if (screenWidth >= 768 && screenWidth < 1280) {
//     $('.slider__wrapper').slick('slickSetOption', 'slidesToShow', 3, true);
//     $('.slider__wrapper').slick('slickSetOption', 'slidesToScroll', 3, true);
//   } else {
//     $('.slider__wrapper').slick('slickSetOption', 'slidesToShow', 4, true);
//     $('.slider__wrapper').slick('slickSetOption', 'slidesToScroll', 4, true);
//   }
// });
