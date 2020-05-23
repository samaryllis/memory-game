document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "mini",
      img: "images/mini.png",
    },
    {
      name: "mini",
      img: "images/mini.png",
    },
    {
      name: "mickey",
      img: "images/mickey.png",
    },
    {
      name: "mickey",
      img: "images/mickey.png",
    },
    {
      name: "duckg",
      img: "images/duckg.png",
    },
    {
      name: "duckg",
      img: "images/duckg.png",
    },
    {
      name: "dog",
      img: "images/dog.png",
    },
    {
      name: "dog",
      img: "images/dog.png",
    },
    {
      name: "pluto",
      img: "images/pluto.png",
    },
    {
      name: "pluto",
      img: "images/pluto.png",
    },
    {
      name: "duck",
      img: "images/duck.png",
    },
    {
      name: "duck",
      img: "images/duck.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      //card.setAttribute("src", cardArray[i].img);
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
  createBoard();
  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cardsWon.push(cardsChosen);
      setTimeout(function () {
        cards[optionOneId].setAttribute("src", "images/white.png");
        cards[optionTwoId].setAttribute("src", "images/white.png");
      }, 500);
    } else {
      setTimeout(function () {
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
      }, 500);
    }
    setScore();
  }

  function setScore() {
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulation! You found them all!";
    }
  }

  //flip your card
  function flipCard() {
    if (cardsChosen.length === 2) {
      return;
    }
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
});
