var $ = jQuery;
$(document).ready(function() {
  initFixedHeader();
  initHeaderSearch();
  initMobileNav();
  initAnchorMenu();
  initSlickSlider();
  initFullInputUserForm();







  initAccordion();
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
    if (window.pageYOffset > sticky) {
      $('.navigation-page').addClass("sticky");
    } else {
      $('.navigation-page').removeClass("sticky");
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
function initAnchorMenu() {
  $(".navigation-menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
     top = $(id).offset().top - 185;
      if($(this).parent().hasClass('active')){
       return false;
     }
     $('.navigation-menu li').removeClass('active');
     $(this).parent().addClass('active');
    $('body,html').animate({scrollTop: top}, 1000);
  });
  $(window).scroll(function(){
    var $sections = $('section');
    $sections.each(function(i,el){
    var top  = $(el).offset().top - 185;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
        $('a.active').removeClass('active');
        $('a[href="#'+id+'"]').addClass('active');
      }
    })
  });
}
function initSlickSlider() {
  $('.partners-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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






















function initAccordion(){
  $('.accordion .opener').on('click', function() {
    if($(this).closest('li').hasClass('active')){
      $(this).closest('li').removeClass('active');
      $(this).closest('li').find('.accordion-slide').slideUp();
    } else {
      $(this).closest('.accordion').find('.accordion-slide').slideUp();
      $(this).closest('.accordion').find('li').removeClass('active');
      $(this).closest('li').addClass('active');
      $(this).closest('li').find('.accordion-slide').slideDown();
    }
    return false;
  });
  $('.accordion-mobile-opener').on('click', function() {
    $(this).closest('.accordion-mobile > li').toggleClass('open');
    $(this).siblings('.accordion-mobile-slide').slideToggle();
    return false;
  });
}