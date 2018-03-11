$(document).ready(function(){
  // Smooth scrolling
  $("a").on("click", function(event) {

    if (this.hash !== "") {
      // Prevent default
      event.preventDefault();
      // hash
      var hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // default click behavior
        window.location.hash = hash;
      });
    }
  });

  // Nav element highlight toggle + dynamic style changes
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("#proyectos").addClass("selected2");
        $("#about").removeClass("selected");
        $(".container-bio").css("background-color", "#017C69");
        $(".bio-profiles").css("background-color", "#003e34");
        $(".bio-name span").css("color", "#b2d7d2");

        // if ($(window).width() <= 640) {
        //   $("div.container-bio").toggleClass("hidden");
        // }
        //
        // if ($(".bio-name").hasClass("hidden")) {
        //   $(".bio-profiles").css("height", "100%");
        //   $(".bio-name").display("none");
        // } else if ($(".bio-name").hasClass("hidden") && $(window).height() > 360 && $(window).width() <= 640) {
        //   $(".container-bio").css("height", "10%");
        //   $(".bio-profiles").css("height", "100%");
        // } else if ($(window).width() <= 640) {
        //   if ($(window).height() <= 360) {
        //     $(".container-bio").css("height", "40%");
        //     $(".bio-profiles").css("height", "40%");
        //   } else {
        //     $(".container-bio").css("height", "25%");
        //     $(".bio-profiles").css("height", "40%");
        //   }
        // }

    } else {
        $("#proyectos").removeClass("selected2");
        $("#about").addClass("selected");
        $(".container-bio").css("background-color", "#0288cf");
        $(".bio-profiles").css("background-color", "#01517c");
        $(".bio-name span").css("color", "#99cfeb");

        // if ($(window).width() <= 640) {
        //   $(".bio-name").removeClass("hidden");
        // }
        //
        // if ($(".bio-name").hasClass("hidden") && $(window).height() <= 360) {
        //   $(".container-bio").css("height", "15%");
        //   $(".bio-profiles").css("height", "100%");
        // } else if ($(".bio-name").hasClass("hidden") && $(window).height() > 360 && $(window).width() <= 640) {
        //   $(".container-bio").css("height", "10%");
        //   $(".bio-profiles").css("height", "100%");
        // } else if ($(window).width() <= 640) {
        //   if ($(window).height() <= 360) {
        //     $(".container-bio").css("height", "40%");
        //     $(".bio-profiles").css("height", "40%");
        //   } else {
        //     $(".container-bio").css("height", "25%");
        //     $(".bio-profiles").css("height", "40%");
        //   }
        // }
    }

  });

  // Project detail containers (.hover) - toggling opacity on mouseover
  var hover = $(".hover");
  for (var i = 0; i < hover.length; i++) {
        hover[i].addEventListener('mouseover', function() {
          this.style.opacity = "1";
        });
        hover[i].addEventListener('mouseleave', function() {
          this.style.opacity = "0";
        });
    }
});
