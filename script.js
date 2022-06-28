const imageSrc = ["/Pictures/Kings.jpg", "/Pictures/Nebo.jpg", "/Pictures/Deseret.jpg", "/Pictures/Amethyst.jpg", "/Pictures/WindCaves.jpg", "/Pictures/CoyoteGulch.jpg"];

const imageDesc = [
  "King's Peak 13,528' elevation.",
  "Nebo Peak 11,933' elevation.",
  "Deseret Peak 11,035' elevation.",
  "Amethyst Lake 10,762' elevation.",
  "Wind Caves 6,037' elevation.",
  "Coyote Gulch 4,665' elevation.",
];

let placeImg = document.querySelector(".place-img");
let placeDesc = document.querySelector(".place-desc");

const navList = document.getElementsByClassName("nav-item");
console.log(navList[0]);
for (var i = 0; i < navList.length; i++) {
  navList;
}

for (var i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", function () {
    // remove active class for all elements
    for (var i = 0; i < navList.length; i++) {
      navList[i].classList.remove("current--page");
    }
    // add active to clicked element
    this.classList.add("current--page");
    placeImg.src = imageSrc[this.textContent - 1];
    placeDesc.textContent = imageDesc[this.textContent - 1];
  });
}
