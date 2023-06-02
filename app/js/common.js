var $ = jQuery;
$(document).ready(function() {
  initFixedHeader();
  initFixedBlock();
  initHeaderSearch();
  initMobileNav();
  initSlickSliderPromo();
  initSlickSliderBlog();
  initSlickSlider();
  initSlickSlider2();
  initFullInputUserForm();
  initAnchorMenu();
  initPopup();
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
function initFixedBlock() {
  $(".fixed-block .fixed-sidebar").stick_in_parent();
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
function initSlickSliderBlog() {
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
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
    speed: 25000,
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
function initAnchorMenu() {
  $(".filter-page").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
     top = $(id).offset().top - 180;
      if($(this).parent().hasClass('active')){
       return false;
     }
     $('.filter-page li').removeClass('active');
     $(this).parent().addClass('active');
    $('body,html').animate({scrollTop: top}, 1000);
  });
}
/* POPUP */
function initPopup(){
  $('body')
    .popup({
      "opener":".open-popup",
      "popup_holder":"#popup",
      "popup":".popup",
      "close_btn":".close-popup"
    })
}
$.fn.popup = function(o){
 var o = $.extend({
    "opener":".call-back a",
    "popup_holder":"#call-popup",
    "popup":".popup",
    "close_btn":".btn-close",
    "close":function(){},
    "beforeOpen": function(popup) {
     $(popup).css({
      'left': 0,
      'top': 0
     }).hide();
    }
   },o);
  return this.each(function(){
  var container=$(this),
   opener=$(o.opener,container),
   popup_holder=$(o.popup_holder,container),
   popup=$(o.popup,popup_holder),
   close=$(o.close_btn,popup),
   bg=$('.bg',popup_holder);
   popup.css('margin',0);
   opener.click(function(e){
    o.beforeOpen.apply(this,[popup_holder]);
    popup_holder.css('left',0);
    popup_holder.fadeIn(400);
    alignPopup();
    bgResize();
    e.preventDefault();
   });
  function alignPopup(){
   var deviceAgent = navigator.userAgent.toLowerCase();
   var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/i);
   if(agentID){
    if(popup.outerHeight()>window.innerHeight){
     popup.css({'top':$(window).scrollTop(),'left': ((window.innerWidth - popup.outerWidth())/2) + $(window).scrollLeft()});
     return false;
    }
    popup.css({
     'top': ((window.innerHeight-popup.outerHeight())/2) + $(window).scrollTop(),
     'left': ((window.innerWidth - popup.outerWidth())/2) + $(window).scrollLeft()
    });
   }else{
    if(popup.outerHeight()>$(window).outerHeight()){
     popup.css({'top':$(window).scrollTop(),'left': (($(window).width() - popup.outerWidth())/2) + $(window).scrollLeft()});
     return false;
    }
    popup.css({
     'top': (($(window).height()-popup.outerHeight())/2) + $(window).scrollTop(),
     'left': (($(window).width() - popup.outerWidth())/2) + $(window).scrollLeft()
    });
   }
  }
  function alignPopup(){
    $('body').addClass('no-scroll');
    var agentID = navigator.userAgent.match(/(iphone|ipod|ipad|android)/i);
    if(agentID){
      if(popup.outerHeight()>window.innerHeight){
        popup.css({'top':$(window).scrollTop(),'left': ((window.innerWidth - popup.outerWidth())/2) + $(window).scrollLeft()});
        return false;
      }
      popup.css({
        'top': ((window.innerHeight - popup.outerHeight())/2) + $(window).scrollTop(),
        'left': ((window.innerWidth - popup.outerWidth())/2) + $(window).scrollLeft()
      });
    }else{
      if(popup.outerHeight()>$(window).outerHeight()){
        popup.css({'top':$(window).scrollTop(),'left': (($(window).width() - popup.outerWidth())/2) + $(window).scrollLeft()});
        return false;
      }
      popup.css({
        'top': (($(window).height()-popup.outerHeight())/2) + $(window).scrollTop(),
        'left': (($(window).width() - popup.outerWidth())/2) + $(window).scrollLeft()
      });
    }
  }
  function bgResize(){
   var _w=$(window).width(),
    _h=$(document).height();
   bg.css({"height":_h,"width":_w+$(window).scrollLeft()});
  }
  $(window).resize(function(){
   if(popup_holder.is(":visible")){
    bgResize();
    alignPopup();
   }
  });
  if(popup_holder.is(":visible")){
    bgResize();
    alignPopup();
  }
  close.add(bg).click(function(e){
   var closeEl=this;
   popup_holder.fadeOut(400,function(){
    o.close.apply(closeEl,[popup_holder]);
   });
   e.preventDefault();
  });
  function closePopup(e) {
    e.preventDefault();
    $('body').removeClass('no-scroll');
    var closeEl = this;
    console.log(this);
    popup_holder.fadeOut(400,function(){
      o.close.apply(closeEl,[popup_holder]);
      $('.video-popup iframe').attr('src','');
    });
  }
  close.on('click', closePopup);
  bg.on('click', closePopup);
  $('body').keydown(function(e){
   if(e.keyCode=='27'){
    popup_holder.fadeOut(400);
   }
  })
 });
};
/* end POPUP */