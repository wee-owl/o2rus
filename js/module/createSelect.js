import { dataBase } from "./const.js";

const modalForm = document.querySelector(".modal-form");
const selectManager = modalForm.querySelector("select#manager");
const selectArea = modalForm.querySelector("select#area");
const selectTrailer = modalForm.querySelector("select#trailer");
const selectSource = modalForm.querySelector("select#source");
const selectVerify = modalForm.querySelector("select#verify");
const selectLeader = modalForm.querySelector("select#leader");
const selectMedical = modalForm.querySelector("select#medical");


function createSelect(param) {
  dataBase.forEach(item => {
    if (Object.keys(item)[0] === param.id) {
      for (let value of Object.values(item)) {
        value.map(elem => {
          const createOption = document.createElement("option");
          createOption.setAttribute("value", elem);
          createOption.textContent = elem;
          param.appendChild(createOption);
        });
      }
    }
  });
};

createSelect(selectManager);
createSelect(selectArea);
createSelect(selectTrailer);
createSelect(selectSource);
createSelect(selectVerify);
createSelect(selectLeader);
createSelect(selectMedical);