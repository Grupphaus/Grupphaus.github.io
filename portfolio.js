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

    if (scroll >= 600) {
        $("#proyectos").addClass("selected2");
        $("#about").removeClass("selected");
        $(".container-bio").css("background-color", "#017C69");
        $(".bio-profiles").css("background-color", "#003e34");
        $(".bio-name span").css("color", "#b2d7d2");
    } else {
        $("#proyectos").removeClass("selected2");
        $("#about").addClass("selected");
        $(".container-bio").css("background-color", "#0288cf");
        $(".bio-profiles").css("background-color", "#01517c");
        $(".bio-name span").css("color", "#99cfeb");
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
