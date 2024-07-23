const modal = document.querySelector(".modal");
const saveBtn = modal.querySelector(".save-button");
const table = document.querySelector(".table");
const tableBody = table.querySelector(".table-body");


saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const resArr = [
    modal.querySelector("input#name").value,
    modal.querySelector("select#manager").value,
    modal.querySelector("input#tel").value,
    modal.querySelector("input#age").value,
    modal.querySelector("select#area").value,
    modal.querySelector("select#trailer").value,
    modal.querySelector("input#experience").value,
    modal.querySelector("select#source").value,
    modal.querySelector("input#advisor").value,
    modal.querySelector("select#verify").value,
    modal.querySelector("select#leader").value,
    modal.querySelector("select#medical").value,
    modal.querySelector("input#comment").value,
  ];

  const createTR = document.createElement("tr");
  resArr.map(item => {
    const createTD = document.createElement("td");
    createTD.textContent = item;
    createTR.appendChild(createTD);
  });
  tableBody.appendChild(createTR);
  modal.classList.toggle("modal-active");
});