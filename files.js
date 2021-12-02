var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});




// search-box open close js code
let menu = document.querySelector(".menu"); 
// menu responsivo para celular, abrir e fechar
let opcoes = document.querySelector(".opcoes");
let menuOpenBtn = document.querySelector(".menu i.fa-bars");
let menuCloseBtn = document.querySelector(".opcoes i.bx-x");
menuOpenBtn.onclick = function() {
opcoes.style.left = "0";
}
menuCloseBtn.onclick = function() {
  opcoes.style.left = "-100%";
}
