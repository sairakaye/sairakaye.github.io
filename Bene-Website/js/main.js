$(window).scroll(function () {
  if ($(document).scrollTop() > 1) {
    $('.navbar').addClass('affix');
  } else {
    $('.navbar').removeClass('affix');
  }
});