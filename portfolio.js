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

  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $(".intro").css("margin-top", "150px");
        $(".technologies").css("margin", "100px 0");
    }

  // Nav element highlight toggle + dynamic style changes on smaller viewports
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();

      if (scrollPos >= 500) {
        $("#proyectos").addClass("selected2");
        $("#about").removeClass("selected");
        $(".container-bio").css("background-color", "#017C69");
        $(".bio-profiles").css("background-color", "#003e34");
        $(".bio-name span").css("color", "#b2d7d2");
        $("nav").css("box-shadow", "0 2px 2px -2px gray");

      } else {

        $("#proyectos").removeClass("selected2");
        $("#about").addClass("selected");
        $(".container-bio").css("background-color", "#0288cf");
        $(".bio-profiles").css("background-color", "#01517c");
        $(".bio-name span").css("color", "#99cfeb");
        $("nav").css("box-shadow", "none");
      }

      // Header transform on scroll position - 800px / 640px range
      if (scrollPos >= 500 && $(window).width() <= 800 && $(window).width() > 640 ) {
        $(".container-bio").css("height", "75px");
        $(".bio-profiles").css("height", "100%");
        $(".bio-name").css("opacity", "0");
      } else if (scrollPos < 500 && $(window).width() <= 800 && $(window).width() > 640) {
        $(".container-bio").css("height", "200px");
        $(".bio-profiles").css("height", "75px");
        $(".bio-name").css("opacity", "1");

      }

      // Header transform on scroll position - 640px / 414px range
      if (scrollPos >= 500 && $(window).width() <= 640 && $(window).width() > 414 ) {
        $(".container-bio").css("height", "55px");
        $(".bio-profiles").css("height", "100%");
        $(".bio-name").css("opacity", "0");
      } else if (scrollPos < 500 && $(window).width() <= 640 && $(window).width() > 414) {
        $(".container-bio").css("height", "130px");
        $(".bio-profiles").css("height", "55px");
        $(".bio-name").css("opacity", "1");

      }

      // Header transform on scroll position - 414px and less
      if (scrollPos >= 500 && $(window).width() <= 414) {
        $(".container-bio").css("height", "40px");
        $(".bio-profiles").css("height", "100%");
        $(".bio-name").css("opacity", "0");
      } else if (scrollPos < 500 && $(window).width() <= 414) {
        $(".container-bio").css("height", "100px");
        $(".bio-profiles").css("height", "40px");
        $(".bio-name").css("opacity", "1");

      }
      // Handles brwoser resizing (kinda?)
      $(window).resize(function() {
       if ($(window).width() > 960) {
          $(".container-bio").css("height", "100%");
          $(".bio-profiles").css("height", "12%");
          $(".bio-name").css("opacity", "1");
        } else if ($(window).width() > 800 && $(window).width <= 960) {
            $(".container-bio").css("height", "200px");

        }
      });
  });

  // Project detail containers (.hover) - toggling opacity on mouseover/touch
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
