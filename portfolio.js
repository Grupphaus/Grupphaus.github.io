// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//
//       $('main').animate({
//         scrollTop: $(hash).offset().top}, 1300, function(){
//         window.location.hash = hash;
//       });
//     }
//   });
// });

window.onload = function(){
  var main = document.getElementById('container-main');
  var aboutHeader = document.getElementById("about");
  var proyectosHeader = document.getElementById("proyectos");
  var contactoHeader = document.getElementById("contacto");
  var about = document.getElementById("about-content");
  var proyectos = document.getElementById("proyectos-content");
  var contacto = document.getElementById("contacto-content");
  var portfolio = document.querySelector(".portfolio");

  aboutHeader.addEventListener("click", function () {
    aboutHeader.className = "selected";
    proyectosHeader.className = "";
    contactoHeader.className = "";
  });
  proyectosHeader.addEventListener("click", function () {
    proyectosHeader.className = "selected";
    portfolio.className = "portfolio portfolio-animate";
    aboutHeader.className = "";
    contactoHeader.className = "";
  });
  contactoHeader.addEventListener("click", function () {
    contactoHeader.className = "selected";
    proyectosHeader.className = "";
    aboutHeader.className = "";
  });
};
