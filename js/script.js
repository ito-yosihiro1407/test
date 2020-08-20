 $(function(){
       $(window).scroll(function() {
           console.log($(this).scrollTop());

           if($(this).scrollTop() > 400) {
             $(".section-body").fadeIn(1500);
              }       
           });

       $(window).scroll(function() {
           console.log($(this).scrollTop());

           if($(this).scrollTop() > 950) {
             $(".section-body_about").fadeIn(1500);
              }       
           });

       $(window).scroll(function() {
           console.log($(this).scrollTop());

           if($(this).scrollTop() > 1250) {
             $(".skill_inner").fadeIn(1500);
              }       
           });

var topBtn = $('#page-top');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });









    });
