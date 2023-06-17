
// $(document).ready(function () {
//   $(window).scroll(function(){
// if($(this).scrollTop() > 100){
//   $('#NavBar').addClass('sticky')
// } else{
//   $('#NavBar').removeClass('sticky')
// }
// });

// });

var a = 0;


$(window).scroll(function () {
  var oTop = $("#counter-box")?.offset()?.top - (window.innerHeight);
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-number");
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {
          duration: 6050,
          easing: "swing",
          step: function () {
            //$this.text(Math.ceil(this.countNum));
            $this.text(
              Math.ceil(this.countNum).toLocaleString("en")
            );
          },
          complete: function () {
            $this.text(
              Math.ceil(this.countNum).toLocaleString("en")
            );
            //alert('finished');
          }
        }
      );
    });
    a = 1;
  }
});









