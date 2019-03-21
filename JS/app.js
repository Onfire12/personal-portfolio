 console.log("connect to js")

 $(".icons").hover(function() {
    $(this).addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
        $(this).removeClass('animated rubberBand');
      });
  });
