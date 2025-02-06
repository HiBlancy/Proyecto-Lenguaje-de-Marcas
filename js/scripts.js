document.addEventListener("DOMContentLoaded", () => {
  // Menu
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.querySelector("nav ul");
  const logo = document.querySelector(".logo");

  function updateLogo() {
    if (window.innerWidth <= 768) {
      logo.src = "/img/Logo_peque.png"; // Imagen para moviles
    } else {
      logo.src = "/img/Viatges-Cascino.png"; // Imagen para escritorio
    }
  }

  // Actualizar logo al cargar la pagina y al redimensionar
  updateLogo();
  window.addEventListener("resize", updateLogo);

  // Alternar menu en moviles
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Carrusel principal (general)
  const mainCarousel = document.querySelector(".carousel-inner");
  const mainItems = document.querySelectorAll(".carousel-item");
  const mainPrevButton = document.querySelector(".carousel-control.prev");
  const mainNextButton = document.querySelector(".carousel-control.next");
  let mainCurrentIndex = 0;

  function updateMainCarousel() {
    const offset = -mainCurrentIndex * 100;
    mainCarousel.style.transform = `translateX(${offset}%)`;
  }

  mainPrevButton.addEventListener("click", () => {
    mainCurrentIndex =
      mainCurrentIndex === 0 ? mainItems.length - 1 : mainCurrentIndex - 1;
      console.log(mainCurrentIndex);
    updateMainCarousel();
  });

  mainNextButton.addEventListener("click", () => {
    mainCurrentIndex =
      mainCurrentIndex === mainItems.length - 1 ? 0 : mainCurrentIndex + 1;
    updateMainCarousel();
  });

 // Carrusel de promociones
 const promoCarouselWrapper = document.querySelector(".carousel-wrapper");
 const promoItems = document.querySelectorAll(".promotion-itemP");
 const promoPrevButton = document.querySelector(".carousel-control.prevP");
 const promoNextButton = document.querySelector(".carousel-control.nextP");
 let promoCurrentIndex = 0; // Índice actual del carrusel

 function updatePromoCarousel() {
    const itemWidth = promoItems[0].offsetWidth;
    const offset = -promoCurrentIndex * itemWidth;
    promoCarouselWrapper.style.transform = `translateX(${offset}%)`;
 }

 promoPrevButton.addEventListener("click", () => {
   promoCurrentIndex =
   promoCurrentIndex === 0 ? promoItems.length - 1 : promoCurrentIndex - 1;
      console.log(promoCurrentIndex);
      updatePromoCarousel();
 });

 promoNextButton.addEventListener("click", () => {
  promoCurrentIndex =
  promoCurrentIndex === promoItems.length - 1 ? 0 : promoCurrentIndex + 1;
     console.log(promoCurrentIndex);
     updatePromoCarousel();
 });

 // Ajustar el carrusel cuando cambia el size de la ventana
 window.addEventListener("resize", updatePromoCarousel);
});
