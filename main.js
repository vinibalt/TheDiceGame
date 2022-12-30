// const listItem3 = document.querySelector('#list-item-3');
// const listItem1 = document.querySelector('#list-item-1 a');
// const a = document.querySelector('a').setAttribute('href', 'https://bing.com')
// const button = document.querySelector("#button");
// const h1 = document.querySelector('h1');

// button.style.backgroundColor = "yellow";
// button.classList.add('btn');
// h1.classList.add('huge');

// button.addEventListener('click', () => {h1.classList.toggle('huge')});

// listItem3.innerHTML = 'Vinicius Baltazar';

const img1 = document.querySelector('img.img1');
const img2 = document.querySelector('img.img2');
const h1 = document.querySelector('h1');
const playerOne = document.querySelector('.countPOne');
const playerTwo = document.querySelector('.countPTwo');




const diceeImgs = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 
'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

let randomNumber1 = null;
let randomNumber2 = null;
let countPlayerOne = 0;
let countPlayerTwo = 0;

const setDiceeImg = (array) => {
    randomNumber1 = Math.floor(Math.random() * array.length);
    img1.src = array[randomNumber1];
    randomNumber2 = Math.floor(Math.random() * array.length);
    img2.src = array[randomNumber2];
}

const whoWins = () => {
   if(randomNumber1 > randomNumber2){
    h1.innerHTML = 'Player 1 Wins!';
    countPlayerOne++;
    playerOne.innerHTML = `Player One: ${countPlayerOne}`
} else if (randomNumber1 < randomNumber2){
    h1.innerHTML = 'Player 2 Wins!';
    countPlayerTwo++;
    playerTwo.innerHTML = `Player Two: ${countPlayerTwo}`;
} else if (randomNumber1 === randomNumber2){
    h1.innerHTML = 'Draw!';
}
}

const shuffle = () => {   
    img1.src = './images/dice6.png'
    img2.src = './images/dice6.png'
    playerOne.innerHTML = `Player One: ${countPlayerOne = 0}`;
    playerTwo.innerHTML = `Player Two: ${countPlayerTwo = 0}`;
}