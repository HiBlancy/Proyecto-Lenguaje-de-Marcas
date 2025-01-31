// Menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.querySelector("nav ul");
  const logo = document.querySelector(".logo");

  function updateLogo() {
    if (window.innerWidth <= 768) {
      logo.src = "/img/Logo_peque.png"; // Imagen para móviles
    } else {
      logo.src = "/img/Viatges-Cascino.png"; // Imagen para escritorio
    }
  }

  // Actualizar al cargar la página
  updateLogo();

  // Actualizar al cambiar el tamaño de la ventana
  window.addEventListener("resize", updateLogo);

  // Alternar menu en moviles
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Carrusel
  const carousel = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".carousel-control.prev");
  const nextButton = document.querySelector(".carousel-control.next");
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });
});
