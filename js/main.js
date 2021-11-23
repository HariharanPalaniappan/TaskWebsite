//regEx
const regNumber = /^[0-9]+$/;
const regString = /^[a-zA-Z]+$/;
//var
const phNumberDiv = $('.phone-number');
const phNum = $('#phoneNumber');
const fullName = $('#fullName');
const fullNameDiv = $('.full-name');
const residence = $('#residence');
const nationality = $('#nationality');
const email = $('#email');
// slick carousel
$('.banner-section ul').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
//   validation
  $('.apply-cta').on('click',()=> {
      $('.form-section').addClass('active');
      $('html').css('overflow','hidden')
  });
  $('.blur-bg').on('click',()=> {
    $('.form-section').removeClass('active');
    $('html').css('overflow','auto')
  });
  $('.apply-btn').on('click',()=> {
    if(!(fullName.val().match(regString))){
        fullNameDiv.addClass('error');
    }
    else {
        fullNameDiv.removeClass('error');
    }
    if(!(phNum.val().match(regNumber))){
        phNumberDiv.addClass('error');
    }
    else {
        phNumberDiv.removeClass('error');
    }
    if(residence.val() == 'select') {
        $('.cor').addClass('error');
    } else {
        $('.cor').removeClass('error');
    }
    if(nationality.val() == 'select') {
        $('.nationality').addClass('error');
    } else {
        $('.nationality').removeClass('error');
    }
    if(email.val().trim() == '') {
        $('.email').addClass('error');
    } else {
        $('.email').removeClass('error');
    }
});
$('.hamburger').on('click',()=> {
    $('.mobile-menu').toggleClass('active');
});
$(window).on('scroll',() => {
    if($(window).scrollTop() >= 100) {
        $('.mobile-menu').addClass('scrolled');
    } else {
        $('.mobile-menu').removeClass('scrolled');
    }
})