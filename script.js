const menuToggle = document.getElementById("fr-nav__menu");
const menuWrapper = document.getElementById("fr-nav__ul-wrapper");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");



menuToggle.addEventListener("click", () => {
    menuWrapper.classList.toggle("active");
    bar1.classList.toggle("a");
    bar2.classList.toggle("b");
    bar3.classList.toggle("c");
});


window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  
  if (window.scrollY > 50) {
    navbar.classList.add('full-width');
    navbar.classList.remove('fr-limiter');
  } else {
    navbar.classList.remove('full-width');
    navbar.classList.add('fr-limiter');
  }
});





