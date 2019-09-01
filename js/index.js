$('.menu-toggle').click(function() {
  $('nav').toggleClass('active');
})

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('header').removeClass('default')
    $('header').addClass('affix');
  } else {
    $('header').removeClass('affix');
    $('header').addClass('default');
  }
});

/* Will change I guess */
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if ($('nav').attr('class') == "active") {
      $('nav').removeClass('active');
    }

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus(function() {
              $(this).css("outline-style", "none");
              $(this).css("box-shadow", "none");
              $(this).css("border-color", "transparent")
            });
          };
        });
      }
    }
  });