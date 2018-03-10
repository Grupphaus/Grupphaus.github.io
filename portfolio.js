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

  // Nav element highlight toggle
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $("#proyectos").addClass("selected");
        $("#about").removeClass("selected");
    } else {
        $("#proyectos").removeClass("selected");
        $("#about").addClass("selected");
    }
  });

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
