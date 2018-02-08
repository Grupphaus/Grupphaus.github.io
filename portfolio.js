window.onload = function(){
  var main = document.getElementById('container-main');
  var aboutHeader = document.getElementById("about");
  var proyectosHeader = document.getElementById("proyectos");
  var contactoHeader = document.getElementById("contacto");
  var about = document.getElementById("about-content");
  var proyectos = document.getElementById("proyectos-content");
  var contacto = document.getElementById("contacto-content");
  var portfolio = document.querySelector(".portfolio");
  var formContainer = document.querySelector(".form-container");

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
    formContainer.className = "form-container form-container-animate";
    proyectosHeader.className = "";
    aboutHeader.className = "";
  });
};
