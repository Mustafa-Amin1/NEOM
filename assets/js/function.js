// Start Pre loader 
paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
};

Pace.on('done', function () {
  $('.p').delay(500).animate({
    top: '30%',
    opacity: '0'
  }, 3000, $.bez([0.19, 1, 0.22, 1]));
  $('#preloader').delay(1500).animate({
    top: '-100%'
  }, 2000, $.bez([0.19, 1, 0.22, 1]));
  TweenMax.from(".title", 2, {
    delay: 1,
    y: 50,
    opacity: 0,
    ease: Bounce.easeInOut
  });

  // reveal librar code 
  (function ($) {
    "use strict";
    var config = {
      reset: false,
      move: "40px",
      mobile: false,
    };
    window.sr = new scrollReveal(config);
  })();
});
// End Pre loader 


//  navbar sticky
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#NavBar').addClass('sticky').animate(5000)
  } else {
    $('#NavBar').removeClass('sticky').animate(5000)
  }
});

  
$(document).ready(function () {

  //arabic number with class="arabic"
  $('body').persianNum();

  // start hero timer
  function makeTimer() {
    var endTime = new Date("July 13, 2023 17:00:00 PDT");
    var endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>يوم</span>");
    $("#hours").html(hours + "<span>ساعه</span>");
    $("#minutes").html(minutes + "<span>دقيقه</span>");
    $("#seconds").html(seconds + "<span>ثانيه</span>");
  }
  setInterval(function () {
    makeTimer();
    $('body').persianNum();
  }, 0);
  // end hero timer

  // dropdown
  $(function ($) {
    $("ul.navbar-nav li.dropdown-m").hover(
      function () {
        $(this)
          .find(".dropdown-menu")
          .first()
          .stop(true, true)
          .delay(250)
          .slideDown();
      },
      function () {
        $(this)
          .find(".dropdown-menu")
          .first()
          .stop(true, true)
          .delay(100)
          .slideUp();
      }
    );
    document.addEventListener("touchstart", function () { }, true);
  });

  $('.holda a').click(function (e) {
    $('.collapse').collapse('hide');
  });

});


