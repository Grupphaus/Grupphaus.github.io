
window.onload = function(){
  var main = document.getElementById('container-main');
  var scrollpos = main.scrollTop;
  var aboutHeader = document.getElementById("about");
  var proyectosHeader = document.getElementById("proyectos");
  var contactoHeader = document.getElementById("contacto");
    main.addEventListener("scroll", function() {
      if (scrollpos > 150) {
        aboutHeader.className = "";
      }
  });
  aboutHeader.addEventListener("click", function () {
    aboutHeader.className = "selected";
    proyectosHeader.className = "";
    contactoHeader.className = "";
  });
  proyectosHeader.addEventListener("click", function () {
    proyectosHeader.className = "selected";
    aboutHeader.className = "";
    contactoHeader.className = "";
  });
  contactoHeader.addEventListener("click", function () {
    proyectosHeader.className = "";
    contactoHeader.className = "selected";
    aboutHeader.className = "";
  });
};
