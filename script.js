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


let msmes = [
  "Catering service",
  "Salon",
  "Barbershop",
  "Spa",
  "Auto repair",
  "Car wash",
  "Tutorial center",
  "Daycare",
  "Cleaning service",
  "Pest control service",
  "Appliance repair",
  "Plumber",
  "Electrical service",
  "Courier service",
  "Delivery service",
  "Van rental",
  "Computer shop",
  "Gadget repair",
  "Photography studio",
  "Videographer",
  "Graphic designer",
  "Web developer",
  "Bookkeeping",
  "Accounting service",
  "Freelancers",
  "Booth Fabricator",
  "Solar Installer",
  "Pickleball Court"
];


const tradeName = document.getElementById("tradeName");
const secondTradeName = document.getElementById("secondTradeName");

let index = 0;

setInterval(() => {
  // index = (index + 1) % msmes.length;
  index = (Math.floor(Math.random() * msmes.length))
  tradeName.textContent = msmes[index];
  secondTradeName.textContent = msmes[index]
}, 3000)
