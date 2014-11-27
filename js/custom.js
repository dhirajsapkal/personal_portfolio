$(document).ready(function() {
  $('#scene').parallax();
  $(window).on("resize", function(){
     setBackgroundHeight();
  });

  function setBackgroundHeight() {
   $(".intro_section, #scene").height($(window).height());
  };

  setBackgroundHeight();

  // setTimeout(function()
  // {
  //     $(".content_first").fadeOut("slow", function ()
  //     {
  //         $(".content_first").remove();
  //         $(".content_first").html($(".content_second").text());
  //         $(".content_first").show();
  //     });
  //  }, 5000);

  $(".content_first").fadeIn(1000, function(){
    $(".content_first").fadeOut(1000, function(){
      $(".content_welcomea").fadeIn(1000);
      $(".content_second").fadeIn(1000, function(){
        $(".content_third").fadeIn(1000, function(){
          $(".content_welcomea").fadeOut(1000);
          $(".content_third").fadeOut(1000, function(){
            $(".content_welcomean").fadeIn(1000);
            $(".content_fifth").fadeIn(1000, function(){
              $(".content_fifth").fadeOut(1000, function(){
                $(".content_sixth").fadeIn(1000, function(){
                  $(".content_sixth").fadeOut(1000);
                  $(".content_welcomean").fadeOut(1000, function(){
                    $(".content_welcomea").fadeIn(1000);
                    $(".content_seventh").fadeIn(1000);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
