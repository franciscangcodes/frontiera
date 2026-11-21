const tradeName = document.getElementById("tradeName");
const secondTradeName = document.getElementById("secondTradeName");

let index = 0;


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

setInterval(() => {
  // index = (index + 1) % msmes.length;
  index = (Math.floor(Math.random() * msmes.length))
  tradeName.textContent = msmes[index];
  secondTradeName.textContent = msmes[index]
}, 3000)