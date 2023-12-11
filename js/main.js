//navbar
$(document).ready(function () {
  var navbar = $(".primary-nav");
  var offset = 200;

  $(window).scroll(function () {
    if (window.scrollY >= offset) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }
  });
});

$(".open-menu").click(function (e) {
  if ($(this).next().hasClass("show-menu")) {
    $(this).next().removeClass("show-menu");
    $(this).removeClass("active-hamburger");
  } else {
    $(this).next().addClass("show-menu");
    $(this).addClass("active-hamburger");
  }
});
//navbar end
$(".faq-card .question").click(function (e) {
  e.preventDefault();

  if ($(this).parent().hasClass("faq-card--active")) {
    $(this).parent().removeClass("faq-card--active");
    $(this).next().css("max-height", "0px");
  } else {
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".faq-card--active .answer")
      .css("max-height", "0px");
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".faq-card--active")
      .removeClass("faq-card--active");
    $(this).parent().addClass("faq-card--active");
    var heightinside = $(this).next().find(".inner").height() + 50;
    $(this)
      .next()
      .css("max-height", heightinside + "px");
  }
});

$(".testimonials-slider").slick({
  slidesToShow: 2,
  arrows: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        arrows: true,
      },
    },
  ],
});

// $('.change-website-slider').slick({
//     slidesToShow: 5,
//     arrows: true,
//     centerMode: true,
//     variableWidth: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//         }
//       },
//     ]
//   });

var rev = $(".change-website-slider");
rev
  .on("init", function (event, slick, currentSlide) {
    var cur = $(slick.$slides[slick.currentSlide]),
      next = cur.next(),
      prev = cur.prev().prev();
    prev.addClass("slick-sprev");
    next.addClass("slick-snext");
    cur.removeClass("slick-snext").removeClass("slick-sprev");
    slick.$prev = prev;
    slick.$next = next;
  })
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    //console.log('beforeChange');
    var cur = $(slick.$slides[nextSlide]);
    //console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass("slick-sprev");
    slick.$next.removeClass("slick-snext");
    (next = cur.next()), (prev = cur.prev().prev());
    prev.prev();
    prev.next();
    prev.addClass("slick-sprev");
    next.addClass("slick-snext");
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass("slick-next").removeClass("slick-sprev");
  });

rev.slick({
  speed: 1000,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "0",
  swipe: true,
  customPaging: function (slider, i) {
    return "";
  },
  /*infinite: false,*/
});


// var i = 0;
// $(window).scroll(function() {
//   var getg = $(".change-website-box").offset().top - $( window ).height();
//     if ($(this).scrollTop() > getg) { // this refers to window
//       if(i == 0){
//         i = 2;
//         $('.count').each(function () {
//           $(this).prop('Counter',0).animate({
//               Counter: $(this).text()
//           }, {
//               duration: 4000,
//               easing: 'swing',
//               step: function (now) {
//                   $(this).text(Math.ceil(now));
//               }
//           });
//         });
//       }
//   }
// });

$('img, button, .box-type1, .table, .box-type2, box-type3, .testimonial, .box-type4, .numbers').click(function(){
  if(!$(this).hasClass("slick-arrow") && !$(this).hasClass("list-icon2") && !$(this).hasClass("list-icon") && !$(this).hasClass("down-underline")){
    window.location.href='https://app.voolt.com/flow/01/1/';
  }
})