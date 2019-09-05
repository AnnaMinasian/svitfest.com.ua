$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $("nav").css("background", "#a71d21");
        }

        else {
            $("nav").css("background", "none");
        }
    })
})
$(function(){
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top-80;
      $('html, body').animate({scrollTop: dn}, 1000);
    });
  });