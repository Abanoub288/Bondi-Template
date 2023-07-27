let ours = document.querySelectorAll(".our li");
let imgs = Array.from(document.querySelectorAll(".images-box .img"));

ours.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

function removeActive() {
  ours.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.work).forEach((el) => {
    el.style.display = "block";
  });
}
// ***********************************************************************************
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet => {

  bullet.addEventListener("click", (e) => {

    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: 'smooth'
    });
  });
});