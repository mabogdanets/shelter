const BURGER_BTN = document.querySelector("#burger__btn");
const BODY = document.querySelector("body");

const HEADER = document.querySelector(".wrapper-header");
const BURGER_WRAP = document.querySelector(".wrapper-burger")
const LOGO = document.querySelector("#logo");
const NAV = document.querySelector("#navigation");
const NAV_ITEMS = document.querySelector("#navigation__items");

function burgered(){
  BURGER_WRAP.classList.toggle("wrapper-burger_active");
  HEADER.classList.toggle("wrapper-header_burgered");
  LOGO.classList.toggle("logo_burgered");
  NAV.classList.toggle("navigation_burgered"); 
  document.querySelector(".header_pets").classList.toggle("header_pets_not-stiky");
}

function burgerClose() {
  BURGER_BTN.classList.remove("burger_open");
  BURGER_BTN.classList.add("burger_close");
  BODY.classList.remove("hidden-overflow-y");
  burgered();

  BURGER_BTN.addEventListener("animationend", () => {
    BURGER_BTN.classList.remove("burger_close");
  });
}



BURGER_BTN.addEventListener('click', ()=>{
  if (BURGER_BTN.classList.contains("burger_open")) {
    burgerClose();
  } else {
    BURGER_BTN.classList.add("burger_open");
    BURGER_BTN.classList.remove("burger_close");
    BODY.classList.add("hidden-overflow-y");
    burgered();
  }
});

BURGER_WRAP.addEventListener('click', ()=> {
  burgerClose();
});

NAV_ITEMS.addEventListener('click', ()=>{
  if( NAV.classList.contains("navigation_burgered")){
    burgerClose();

  }
})

