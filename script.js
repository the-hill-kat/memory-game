// const gameContainer = document.getElementById("game");
// firstCard = null;
// secondCard = null;
// let flippedCards = 0;
// let click = false;

// const COLORS = [
//   "red",
//   "blue",
//   "green",
//   "orange",
//   "purple",
//   "red",
//   "blue",
//   "green",
//   "orange",
//   "purple"
// ];

// // here is a helper function to shuffle an array
// // it returns the same array with values shuffled
// // it is based on an algorithm called Fisher Yates if you want ot research more
// function shuffle(array) {
//   let counter = array.length;

//   // While there are elements in the array
//   while (counter > 0) {
//     // Pick a random index
//     let index = Math.floor(Math.random() * counter);

//     // Decrease counter by 1
//     counter--;

//     // And swap the last element with it
//     let temp = array[counter];
//     array[counter] = array[index];
//     array[index] = temp;
//   }

//   return array;
// }

// let shuffledColors = shuffle(COLORS);

// // this function loops over the array of colors
// // it creates a new div and gives it a class with the value of the color
// // it also adds an event listener for a click for each card
// function createDivsForColors(colorArray) {
//   for (let color of colorArray) {
//     // create a new div
//     const newDiv = document.createElement("div");

//     // give it a class attribute for the value we are looping over
//     newDiv.classList.add(color);

//     // call a function handleCardClick when a div is clicked on
//     newDiv.addEventListener("click", handleCardClick);

//     // append the div to the element with an id of game
//     gameContainer.append(newDiv);
//   }
// }

// // TODO: Implement this function!
// function handleCardClick(event) {
 

//   let selectedCard = event.target;
//   selectedCard.style.backgroundColor = selectedCard.classList[0];

//   if (!firstCard || !secondCard) {
//     selectedCard.classList.add("flipped");
//     firstCard = firstCard || selectedCard;
//     secondCard = selectedCard === firstCard ? null : selectedCard;
//   }

//   if (firstCard && secondCard){
//     click = true;
//     let theFirstCard = firstCard.className;
//     let theSecondCard = secondCard.className;
    
//     if (theFirstCard === theSecondCard){
//       flippedCards += 2;
//       firstCard.removeEventListener("click", handleCardClick);
//       secondCard.removeEventListener("click", handleCardClick);
//       firstCard = null;
//       secondCard = null;
//       click = false;
//     }
//     //else

//   }

//   // if (selectedCard !== selectedCard){
//   //   clear(selectedCard.style.backgroundColor);
//   // }

//   // if (!firstCard || !secondCard) {
//   //   selectedCard.classList.add("flipped");
//   //   firstCard = firstCard || selectedCard;
//   //   secondCard = selectedCard === firstCard ? null : selectedCard;
//   // }


//   // you can use event.target to see which element was clicked
//   console.log("you just clicked", event.target);
// }

// // when the DOM loads
// createDivsForColors(shuffledColors);

// /* */





// const game = document.getElementById("game");
// let firstCard = null;
// let secondCard = null;
// let flippedCards = 0;
// let noClick = false;

// const colours = [
  // 'green',
  // 'forest-green',
  // 'turquoise',
  // 'lime-green',
  // 'aquamarine',
  // 'green',
  // 'forest-green',
  // 'turquoise',
  // 'lime-green',
  // 'aquamarine'
// ]

// function shuffle(array) {
//   let counter = array.length;
  
//   while (counter > 0) {
//     let index = Math.floor(Math.random() * counter);
//     counter--;
//     let temp = array[counter];
//     array[counter] = array[index];
//     array[index] = temp;
//    }
  
//    return array;
//  }
  
 
// let shuffledWords = shuffle(colours);

// let listElements = document.querySelectorAll('li');
// for (let i = 0; i<listElements.length; i++) {
//   listElements[i].addEventListener('click', handlelick);
// }

// function handlelick(e) {
// e.target.style['content-visibility']='auto';

// if (noClick) return;
// if (e.target.classList.contains("flipped")) return;

// let selectedCard = e.target;
// selectedCard.style.backgroundColor = selectedCard.classList[0];

// if (!firstCard || !secondCard) {
//   selectedCard.classList.add("flipped");
//   firstCard = secondCard || selectedCard;
//   secondCard = selectedCard === firstCard ? null : selectedCard;
// }
// if (firstCard && secondCard) {
//   noClick = true;
//   let selectionOne = firstCard.className;
//   let selectionTwo = secondCard.className;

//   if (selectionOne === selectionTwo) {
//     flippedCards += 2;
//     firstCard.removeEventListener("click", handleCardClick);
//     secondCard.removeEventListener("click", handleCardClick);
//     firstCard = null;
//     secondCard = null;
//     noClick = false;
//   } else {
//     setTimeout (function() {
//       firstCard.style.backgroundColor = "";
//       secondCard.style.backgroundColor = "";
//       firstCard.classList.remove("flipped");
//       secondCard.classList.remove("flipped");
//       firstCard = null;
//       secondCard = null;
//       noClick = false;
//     }, 1000);
//   }
// }
// if (flippedCards === WORDS.length) alert("!GAME OVER!");
// }

// grid.addEventListener('click', function (event) {
//   let clicked = event.target;
//   if (clicked.nodeName === 'Section'){
//     return;
//   }
//   clicked.classList.add('selected');
// })
  
// if (flippedCards < 2){
//   flippedCards++;
//   clicked.classList.add('selected');
// }

// grid.addEventListener('click', function (event) {
//   if (count < 2) {
//     count++;
//     if (count === 1) {
//       firstGuess = clicked.dataset.name;
//       clicked.classList.add('selected');
//     } else {
//       secondGuess = clicked.dataset.name;
//       clicked.classList.add('selected');
//     }
//     if (firstGuess !== '' && secondGuess !== '') {
//       if (firstGuess === secondGuess) {
//         match();
//       }
//     }
//   }
// });



// const detailsElement = document.querySelector('.details-example');

// detailsElement.addEventListener('toggle', event => {
//     if (event.target.open) {
//         console.log('open');
//     } else {
//         console.log('closed');
//     }
// });





const gameContainer = document.getElementById("game");
let firstCard = null;
let secondCard = null;
let flippedCards = 0;
let noClick = false;

const GREENS = [

  "#003300",
  "#006600",
  "#003333",
  "#006633",
  "#009933",
  "#006666",
  "#009966",
  "#00CC66",
  "#00CC33",
  "#00FF66",
  "#003300",
  "#006600",
  "#003333",
  "#006633",
  "#009933",
  "#006666",
  "#009966",
  "#00CC66",
  "#00CC33",
  "#00FF66",
];

//did colours, but just greens, cause my word method and picture method weren't working :(

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(GREENS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(event) {
if (noClick) return;
if (event.target.classList.contains("flipped")) return;

let selectedCard = event.target;
selectedCard.style.backgroundColor = selectedCard.classList[0];

if (!firstCard || !secondCard) {
  selectedCard.classList.add("flipped");
  firstCard = firstCard || selectedCard;
  secondCard = selectedCard === firstCard ? null : selectedCard;
}
if (firstCard && secondCard) {
  noClick = true;
  let selectionOne = firstCard.className;
  let selectionTwo = secondCard.className;

  if (selectionOne === selectionTwo) {
    flippedCards += 2;
    firstCard.removeEventListener("click", handleCardClick);
    secondCard.removeEventListener("click", handleCardClick);
    firstCard = null;
    secondCard = null;
    noClick = false;
  } else {
    setTimeout (function() {
      firstCard.style.backgroundColor = "";
      secondCard.style.backgroundColor = "";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard = null;
      secondCard = null;
      noClick = false;
    }, 1000);
  }
}
if (flippedCards === GREENS.length) alert("WINNER WINNER CHICKEN DINNER");
}



createDivsForColors(shuffledColors);

