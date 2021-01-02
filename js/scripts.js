$(function() {
    $(".carousel").carousel( { interval: 2000, pause: "false" } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")){
          $(".carousel").carousel("pause");
          $("#carouselButton").children("i").removeClass("fa-pause");
          $("#carouselButton").children("i").addClass("fa-play");
        } else {
          $(".carousel").carousel("cycle");
          $("#carouselButton").children("i").removeClass("fa-play");
          $("#carouselButton").children("i").addClass("fa-pause");
        }
    })
    //reserve modal
    $("#reserveButton").click(function(){
      $("#reserveModal").modal("show")
    })
    //login modal
    $("#loginButton").click(function(){
      $("#loginModal").modal("show")
    })
  });