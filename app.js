//card options
const allImages = [
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
  {
    name: "litten",
    img: "images/litten.png",
  },
  {
    name: "litten",
    img: "images/litten.png",
  },
  {
    name: "marowak",
    img: "images/marowak.png",
  },
  {
    name: "marowak",
    img: "images/marowak.png",
  },
  {
    name: "pikachu",
    img: "images/pikachu.png",
  },
  {
    name: "pikachu",
    img: "images/pikachu.png",
  },
  {
    name: "poplio",
    img: "images/poplio.png",
  },
  {
    name: "poplio",
    img: "images/poplio.png",
  },
  {
    name: "rockruff",
    img: "images/rockruff.png",
  },
  {
    name: "rockruff",
    img: "images/rockruff.png",
  },
  {
    name: "rowlet",
    img: "images/rowlet.png",
  },
  {
    name: "rowlet",
    img: "images/rowlet.png",
  },
  {
    name: "stenee",
    img: "images/stenee.png",
  },
  {
    name: "stenee",
    img: "images/stenee.png",
  },
  {
    name: "togedemaru",
    img: "images/togedemaru.png",
  },
  {
    name: "togedemaru",
    img: "images/togedemaru.png",
  },
  {
    name: "vulpix",
    img: "images/vulpix.png",
  },
  {
    name: "vulpix",
    img: "images/vulpix.png",
  },
];

// Select grid
const grid = document.querySelector(".grid");
// Select result
const resultDisplay = document.querySelector("#result");
// Select Easy & Hard mode buttons
const modeHard = document.querySelector("#modeHard");
const modeEasy = document.querySelector("#modeEasy");
modeHard.addEventListener("click", switchToModeHard);
modeEasy.addEventListener("click", switchToModeEasy);

switchToModeEasy();

function switchToModeHard() {
  cardArray = allImages;
  cardArray.sort(() => 0.5 - Math.random());
  grid.classList.remove("easy");
  grid.classList.add("hard");
  createBoard();
  modeHard.style.display = "none";
  modeEasy.style.display = "block";
}

function switchToModeEasy() {
  cardArray = allImages.slice(0, 12);
  cardArray.sort(() => 0.5 - Math.random());
  grid.classList.remove("hard");
  grid.classList.add("easy");
  createBoard();
  modeEasy.style.display = "none";
  modeHard.style.display = "block";
}

var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
var cardsWonUniqueName = [];

//create your board
function createBoard() {
  // empty the board
  grid.innerHTML = "";

  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    //card.setAttribute("src", cardArray[i].img);
    card.setAttribute("data-id", i);
    card.setAttribute("data-name", cardArray[i].name);
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
    cardsWonUniqueName.push(cardsChosen[0]);
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
  // check if already 2 cards fliped
  if (cardsChosen.length === 2) {
    return;
  }
  var cardId = this.getAttribute("data-id");
  var cardName = this.getAttribute("data-name");
  // check if card already fliped
  if (cardsWonUniqueName.indexOf(cardName) != -1) {
    return;
  }
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}
