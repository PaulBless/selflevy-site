import $ from 'jquery';
import 'react-owl-carousel/dist/styles.css';
import 'react-owl-carousel'; // Import without any arguments

$(document).ready(function () {
  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);   

  };
  spinner(0);

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $('.navbar').addClass('sticky-top shadow-lg');   

    } else {
      $('.navbar').removeClass('sticky-top shadow-lg');
    }
  });

  // Hero Header carousel (using react-owl-carousel)
  $(".header-carousel").owlCarousel({
    animateOut: 'slideOutDown',
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ]
  });

  // International carousel (using react-owl-carousel)
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    dots: true,
    dotsData: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ]
  });

  // Modal Video
  var $videoSrc;
  $('.btn-play').click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  $('#videoModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");   

  })

  $('#videoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc);
  })


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');   

    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
  });


  // Removed the myMove function (consider using React animations)

});