fetch("scripts/pets.json")
  .then((res) => res.json())
  .then((data) => {

    let numPets = 8,
        numPages = 6;

    const PAGIN = document.querySelector("#pagination__pages");
    const BTN_LEFTEND = document.querySelector("#pagin__btn_leftend");
    const BTN_LEFT = document.querySelector("#pagin__btn_left");
    const BTN_PAGE = document.querySelector("#pagin__page");
    const BTN_RIGHT = document.querySelector("#pagin__btn_right");
    const BTN_RIGHTEND = document.querySelector("#pagin__btn_rightend");

    const createCard = (petObj) => {
      const card = document.createElement("div");
      card.classList.add("pet");
      card.setAttribute("id", petObj.id);

      const img = document.createElement("img");
      img.classList.add("pet__img");
      img.src = `${petObj.img}`;
      card.append(img);

      const p = document.createElement("p");
      p.classList.add("pet__name");
      p.textContent = petObj.name;
      card.append(p);

      const btn = document.createElement("button");
      btn.classList.add("pet__btn");
      btn.classList.add("button");
      btn.classList.add("button_border");
      btn.textContent = "Learn more";
      card.append(btn);

      return card;
    }
    function getRandomNum() {
      return Math.floor(Math.random() * 8 ); 
    }

    for (let i = 0; i < numPages; i++) {
      let page = document.createElement("div");
      page.classList.add("pagination__page");

      for(let i = 0; i < numPets; i++) {
        let num = getRandomNum();
        let card = createCard(data[num]);
        page.appendChild(card);
      }

      PAGIN.appendChild(page);
    }

    const moveLeft = () => {
      
    }

    BTN_LEFT.addEventListener("click", moveLeft);

    
    //BTN_LEFTEND.addEventListener("click", moveLeftEnd);

    BTN_RIGHT.addEventListener("click", moveRight);
    //BTN_RIGHTEND.addEventListener("click", moveLeft);



  });
