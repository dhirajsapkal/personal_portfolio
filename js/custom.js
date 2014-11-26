$(document).ready(function() {
  $('#scene').parallax();
  $(window).on("resize", function(){
     setBackgroundHeight();
    });

    function setBackgroundHeight() {
     $(".intro_section, #scene").height($(window).height());
    };

    setBackgroundHeight();
});
