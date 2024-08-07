fetch("scripts/pets.json")
  .then((res) => res.json())
  .then((data) => {
    const BTN_LEFT = document.querySelector("#carousel__btn_left");
    const BTN_RIGHT = document.querySelector("#carousel__btn_right");
    const CAROUSEL = document.querySelector("#carousel__cards");
    const CARDS_LEFT = document.querySelector("#cards_left");
    const CARDS_RIGHT = document.querySelector("#cards_right");
    const CARDS_ACTIVE = document.querySelector("#cards_active");
    
    let numGenerate;
    function whichNumGen(){
      if (window.innerWidth > 1279) {
        numGenerate = 3;      
      } else if (window.innerWidth > 767) {
        numGenerate = 2;
      } else {
        numGenerate = 1;
      }
    }
    whichNumGen(); 
    ///создание карточки

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

    //// рандомный номер

    function getRandomNum() {
    return Math.floor(Math.random() * 8 ); 
    }

    /// заполнить слайд карточек

    let lastIds = "",
        curIds = "";
    function fillCards(area){
      for (let i = 0; i < numGenerate; i++) {
        let num = getRandomNum();
        while (curIds.includes(num) || lastIds.includes(num)) {
          num = getRandomNum();
        }  
        curIds += num;
        const card = createCard(data[num]);
        area.appendChild(card);
      }  
      lastIds = curIds;
      curIds = "";
    }

    function cleanAreas(){
      CARDS_LEFT.innerHTML = "";
      CARDS_RIGHT.innerHTML = "";
      CARDS_ACTIVE.innerHTML = "";
    }

    function fillAreas(){
      fillCards(CARDS_LEFT);
      fillCards(CARDS_ACTIVE);
      fillCards(CARDS_RIGHT);
    }
    fillAreas();


    function changeSize() {
      let prev = numGenerate;
      whichNumGen();

      if (numGenerate!==prev){
        cleanAreas();
        fillAreas(); 
      }
    }
    ///нажатие кнопки, транзишион

    const moveLeft = () =>{
      CAROUSEL.classList.add("transition-left");
      BTN_LEFT.removeEventListener("click", moveLeft);
      BTN_RIGHT.removeEventListener("click", moveRight);
    } 
    const moveRight = () => {
      CAROUSEL.classList.add("transition-right");
      BTN_LEFT.removeEventListener("click", moveLeft);
      BTN_RIGHT.removeEventListener("click", moveRight);
    };

    BTN_LEFT.addEventListener("click", moveLeft);//
    BTN_RIGHT.addEventListener("click", moveRight); //

    CAROUSEL.addEventListener("animationend", (animationEvent) => {
      let changedCards;
      if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        changedCards = CARDS_LEFT;
        CARDS_RIGHT.innerHTML = CARDS_ACTIVE.innerHTML; 
        CARDS_ACTIVE.innerHTML = CARDS_LEFT.innerHTML;
        
      } else {
        CAROUSEL.classList.remove("transition-right");
        changedCards = CARDS_RIGHT;
        CARDS_LEFT.innerHTML = CARDS_ACTIVE.innerHTML; 
        CARDS_ACTIVE.innerHTML = CARDS_RIGHT.innerHTML;
      }

      changedCards.innerHTML = "";
      fillCards(changedCards);
      
      BTN_LEFT.addEventListener("click", moveLeft);
      BTN_RIGHT.addEventListener("click", moveRight);
    });

    window.addEventListener('resize', changeSize);
  });

