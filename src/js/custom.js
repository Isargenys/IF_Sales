$(document).ready(function() {
  
  //Funcion para el menu lateral
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

});