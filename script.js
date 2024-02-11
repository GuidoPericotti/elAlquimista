function toggleMenu() {
  var menu = document.getElementById("menu");
  var icono = document.getElementById("icon");
  if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      icono.src = "img/cerrar.png";
      icono.classList.add("rotated");
      // Agregar el event listener al documento para detectar clics fuera del menú
      document.addEventListener("click", closeMenu);
  } else {
      menu.classList.add("hidden");
      icono.src = "img/menu.png";
      icono.classList.remove("rotated");
      // Remover el event listener del documento cuando se cierre el menú
      document.removeEventListener("click", closeMenu);
  }
}

function closeMenu(event) {
  var menu = document.getElementById("menu");
  var icono = document.getElementById("icon");
  var target = event.target;

  // Verificar si el clic fue fuera del menú
  if (!menu.contains(target) && target !== icono) {
      menu.classList.add("hidden");
      icono.src = "img/menu.png";
      icono.classList.remove("rotated");
      // Remover el event listener del documento cuando se cierre el menú
      document.removeEventListener("click", closeMenu);
  }
}

// Agregar el event listener a cada li para cerrar el menú al hacer clic
var liElements = document.querySelectorAll("#menu li");
liElements.forEach(function(liElement) {
  liElement.addEventListener("click", toggleMenu);
});