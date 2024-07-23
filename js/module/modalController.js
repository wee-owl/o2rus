const modal = document.querySelector(".modal");
const createBtn = document.querySelector(".create-button");
const closeBtn = document.querySelector(".modal-close-button");


function modalController(e) {
  e.preventDefault();
  modal.classList.toggle("modal-active");
};

createBtn.addEventListener("click", modalController);
closeBtn.addEventListener("click", modalController);