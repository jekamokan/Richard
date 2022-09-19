$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    slideToShow: 1,
    arrow: false,
    fade: true,
    cssEase: 'linear',
  });

$('.header__menu-burger').click(function (event) {
  $('.nav__list').toggleClass('nav__list-active')
  $('.header__menu-burger').toggleClass('header__menu-active')
  $('.header__content').toggleClass('header__content-active');
  })







});