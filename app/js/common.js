var $ = jQuery;
$(document).ready(function() {
  initFixedHeader();
  initHeaderSearch();
  initMobileNav();
  initSlickSliderPromo();
  initSlickSlider();
  initSlickSlider2();
  initFullInputUserForm();
  initCountAnimate();
});

function initFixedHeader() {
  window.onscroll = function() {myFunction()};
  var sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      $('#header').addClass("sticky");
    } else {
      $('#header').removeClass("sticky");
    }
  }
}
function initHeaderSearch() {
  $('.form-search-btn').on('click', function(){
    $(this).closest('.form-search').toggleClass('open');
    return false;
  });
  $(document).click(function(event) {
    if ($(event.target).closest(".form-search .search").length) return;
    $(".form-search").removeClass('open');
    event.stopPropagation();
  });
}
function initMobileNav(){
  $('.mob-btn').on('click', function(){
    $(this).closest('#nav').toggleClass('active');
    $('body').toggleClass('open-nav');
    return false;
  });
};
function initSlickSliderPromo() {
  $('.promo-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
}
function initSlickSlider() {
  $('.partners-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 8000,
    arrows: false,
    dots: false,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear'
  });
}
function initSlickSlider2() {
  $('.stock-ticker-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 15000,
    arrows: false,
    dots: false,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear'
  });
}
function initFullInputUserForm(){
  $('.user-form #name1').on('keyup',function(){
    var $this = $(this),
      val = $this.val();
    if(val.length >= 1){
      $('.user-form .name1').addClass('full-name1');
    }else {
      $('.user-form .name1').removeClass('full-name1');
    }
  });
  $('.user-form #name2').on('keyup',function(){
    var $this = $(this),
      val = $this.val();
    if(val.length >= 1){
      $('.user-form .name2').addClass('full-name2');
    }else {
      $('.user-form .name2').removeClass('full-name2');
    }
  });
  $('.user-form #email').on('keyup',function(){
    var $this = $(this),
      val = $this.val();
    if(val.length >= 1){
      $('.user-form .email').addClass('full-email');
    }else {
      $('.user-form .email').removeClass('full-email');
    }
  });
};
function initCountAnimate(){
  var _flag = true;
  if (!$(".numeric").is('ul')) {
    return;
  }
  $(window).on('scroll touchend', function() {
    if ($('.numeric').offset().top < $(window).scrollTop() + $(window).height() / 1.5) {
      $('.numeric .cost').each(function(i, elem) {
        var _self = elem;
        if (_flag == true) {
          $({
            n: 0
          }).stop(true, true).animate({
            n: parseInt($(_self).data('max'))
          }, {
            duration: 1200,
            step: function(a) {
              $(_self).html(a | 0);
            }
          });
        }
      });
      _flag = false;
    }
  });
};