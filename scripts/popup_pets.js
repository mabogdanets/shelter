import data from "./pets.json" assert { type: "json"};

const POPUP = document.querySelector(".wrapper-popup");
const BODY = document.querySelector("body");
const NAME = document.querySelector(".popup__name");
const IMG = document.querySelector(".popup__img"); 
const BREED = document.querySelector(".popup__breed");
const DESCRIPT= document.querySelector(".popup__description");
const AGE = document.querySelector(".popup__item_age");
const INOCUL = document.querySelector(".popup__item_inoculations");
const DISEASES= document.querySelector(".popup__item_diseases");
const PARASITES= document.querySelector(".popup__item_parasites");
const CAROUSEL_PETS = document.querySelector(".carousel__cards_pets");


function generatePopup(id) {
  POPUP.classList.add("wrapper-popup_active");
  IMG.src = `${data[id].img}`;
  NAME.textContent = data[id].name;
  BREED.textContent = `${data[id].type} - ${data[id].breed}`;
  DESCRIPT.textContent = data[id].description;
  AGE.textContent = data[id].age;
  INOCUL.textContent = data[id].inoculations;
  DISEASES.textContent = data[id].diseases;
  PARASITES.textContent = data[id].parasites;
}

CAROUSEL_PETS.addEventListener('click', (event) => {
  if (event.target.classList.contains('pet__btn')) {
    let id = event.target.parentElement.getAttribute("id");
    generatePopup(id);
    POPUP.classList.add("wrapper-popup_active");
    BODY.classList.add("hidden-overflow-y");
  }
});



document.querySelector(".wrapper-popup").addEventListener('click', () => {
  POPUP.classList.remove("wrapper-popup_active");
  BODY.classList.remove("hidden-overflow-y");
});



