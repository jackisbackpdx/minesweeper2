import makeSquares from './make-squares.js';

let gameSettings = {
    gameSize: 5,
    bombs: 4,
};

let difficultyToNumber = 0;
let timesToClick = 21;

let row1 = [];
let row2 = [];
let row3 = [];
let row4 = [];
let row5 = [];
let row6 = [];
let row7 = [];
let row8 = [];

const selectedDropDown = document.querySelector('select');
const main = document.querySelector('main');

main.style.width = '280px';
main.style.height = '280px';

let squareAmount = gameSettings.gameSize * gameSettings.gameSize;

function removeSquares() {
    for (let i = 1; i < gameSettings.gameSize + 1; i++) {
        for (let j = 1; j < gameSettings.gameSize + 1; j++) {
            let id = document.getElementById(`row${i}col${j}`);
            id.remove();
        }
    }
}

let bombArr = [];
function generateBombs() {
    bombArr = [];
    for (let i = 0; i < gameSettings.bombs; i++) {
        let randomNum = Math.floor(Math.random() * gameSettings.gameSize);
        let randomNum2 = Math.floor(Math.random() * gameSettings.gameSize);
        let bomb = iterator[randomNum][randomNum2];
        for (let i = 0; i < bombArr.length; i++) {
            if (bomb === bombArr[i]) {
                let newRandomNum = Math.floor(Math.random() * gameSettings.gameSize);
                let newRandomNum2 = Math.floor(Math.random() * gameSettings.gameSize);
                bomb = iterator[newRandomNum][newRandomNum2];
            }
        }
        bombArr.push(bomb);
        bomb.classList.add('bomb');
    }
    detectBombs();
}

selectedDropDown.addEventListener('change', function() {
    let difficulty = this.value;
    difficultyToNumber = parseInt(difficulty);
    if (difficultyToNumber === 0){
        removeSquares();
        gameSettings.gameSize = 5;
        squareAmount = gameSettings.gameSize * gameSettings.gameSize;
        gameSettings.bombs = 4;
        timesToClick = squareAmount - gameSettings.bombs;
        main.style.width = '280px';
        main.style.height = '280px';
        score.style.width = main.style.width;
        makeSquares(main, squareAmount, setIds, generateBombs);
        gameOver = false;
    } else if (difficultyToNumber === 1){
        removeSquares();
        gameSettings.gameSize = 6;
        squareAmount = gameSettings.gameSize * gameSettings.gameSize;
        gameSettings.bombs = 5;
        timesToClick = squareAmount - gameSettings.bombs;
        main.style.width = '335px';
        main.style.height = '335px';
        score.style.width = main.style.width;
        makeSquares(main, squareAmount, setIds, generateBombs);
        gameOver = false;
    } else if (difficultyToNumber === 2){
        removeSquares();
        gameSettings.gameSize = 7;
        squareAmount = gameSettings.gameSize * gameSettings.gameSize;
        gameSettings.bombs = 6;
        timesToClick = squareAmount - gameSettings.bombs;
        main.style.width = '390px';
        main.style.height = '390px';
        score.style.width = main.style.width;
        makeSquares(main, squareAmount, setIds, generateBombs);
        gameOver = false;
    } else {
        removeSquares();
        gameSettings.gameSize = 8;
        squareAmount = gameSettings.gameSize * gameSettings.gameSize;
        gameSettings.bombs = 7;
        timesToClick = squareAmount - gameSettings.bombs;
        main.style.width = '445px';
        main.style.height = '445px';
        score.style.width = main.style.width;
        makeSquares(main, squareAmount, setIds, generateBombs);
        gameOver = false;
    }
}, false);

let tempArray = [];
let iterator = [];

makeSquares(main, squareAmount, setIds, generateBombs);

function setIds() {
    row1 = [];
    row2 = [];
    row3 = [];
    row4 = [];
    row5 = [];
    row6 = [];
    row7 = [];
    row8 = [];
    tempArray = [];
    iterator = [];
    let squaresArray = document.querySelectorAll('div');
    for (let i = 0; i < squaresArray.length; i++) {
        if (i < (gameSettings.gameSize)) {
            squaresArray[i].id = `row1col${i + 1}`;
            row1.push(squaresArray[i]);
        } if (i >= (gameSettings.gameSize) && i < (gameSettings.gameSize * 2)) {
            squaresArray[i].id = `row2col${i - ((gameSettings.gameSize) - 1)}`;
            row2.push(squaresArray[i]);
        } if (i >= (gameSettings.gameSize * 2) && i < (gameSettings.gameSize * 3)) {
            squaresArray[i].id = `row3col${i - ((gameSettings.gameSize * 2) - 1)}`;
            row3.push(squaresArray[i]);
        } if (i >= (gameSettings.gameSize * 3) && i < (gameSettings.gameSize * 4)) {
            squaresArray[i].id = `row4col${i - ((gameSettings.gameSize * 3) - 1)}`;
            row4.push(squaresArray[i]);
        } if (i >= (gameSettings.gameSize * 4) && i < (gameSettings.gameSize * 5)) {
            squaresArray[i].id = `row5col${i - ((gameSettings.gameSize * 4) - 1)}`;
            row5.push(squaresArray[i]);
        } if (i >= (gameSettings.gameSize * 5) && i < (gameSettings.gameSize * 6)) {
            squaresArray[i].id = `row6col${i - ((gameSettings.gameSize * 5) - 1)}`;
            row6.push(squaresArray[i]);
        } if (i >= (gameSettings.gameSize * 6) && i < (gameSettings.gameSize * 7)) {
            squaresArray[i].id = `row7col${i - ((gameSettings.gameSize * 6) - 1)}`;
            row7.push(squaresArray[i]);
        } if (i >= (gameSettings.gameSize * 7) && i < (gameSettings.gameSize * 8)) {
            squaresArray[i].id = `row8col${i - ((gameSettings.gameSize * 7) - 1)}`;
            row8.push(squaresArray[i]);
        }
        if (i === squaresArray.length - 1) {
            tempArray.push(row1);
            tempArray.push(row2);
            tempArray.push(row3);
            tempArray.push(row4);
            tempArray.push(row5);
            tempArray.push(row6);
            tempArray.push(row7);
            tempArray.push(row8);
            for (let i = 0; i < 8; i++) {
                if (tempArray[i].length > 4) {
                    iterator.push(tempArray[i]);
                }
            }
        }
    }
}

let winCount = 0;
let lossCount = 0;

const paragraphs = document.querySelectorAll('p');

function gameWon() {
    winCount++;
    paragraphs[0].textContent = `You have won
    ${winCount} 
    times`;
    for (let j = 0; j < iterator.length; j++) {
        for (let k = 0; k < iterator[j].length; k++) {
            iterator[j][k].style.cursor = 'default';
        }
    }
    for (let i = 0; i < bombArr.length; i++) {
        bombArr[i].textContent = '💣';
        bombArr[i].style.backgroundColor = 'blue';
        bombArr[i].style.cursor = 'default';
        bombArr[i].classList.replace('bomb', 'clear');
    }
}

let gameOver = false;
let firstClick = true;

function detectBombs() {
    for (let i = 0; i < iterator.length; i++) {
        for (let j = 0; j < iterator[i].length; j++) {
            iterator[i][j].addEventListener('click', function detectBomb() {
                let num = 0;
                if (j < iterator.length - 1 && iterator[i][j + 1].className === 'bomb') {
                    num++;
                }
                if (j > 0 && iterator[i][j - 1].className === 'bomb') {
                    num++;
                }
                if (i < iterator.length - 1 && j > 0 && iterator[i + 1][j - 1].className === 'bomb') {
                    num++;
                }
                if (i < iterator.length - 1 && iterator[i + 1][j].className === 'bomb') {
                    num++;
                }
                if (i < iterator.length - 1 && j < iterator.length - 1 && iterator[i + 1][j + 1].className === 'bomb') {
                    num++;
                }
                if (i > 0 && j < iterator.length - 1 && iterator[i - 1][j + 1].className === 'bomb') {
                    num++;
                }
                if (i > 0 && iterator[i - 1][j].className === 'bomb') {
                    num++;
                }
                if (i > 0 && j > 0 && iterator[i - 1][j - 1].className === 'bomb') {
                    num++; 
                }
                if (num > 0) {
                    iterator[i][j].textContent = num;
                }
                if (iterator[i][j].className === 'bomb') {
                    iterator[i][j].textContent = '💣';
                    iterator[i][j].style.backgroundColor = 'red';
                    iterator[i][j].style.cursor = 'default';
                    bombClicked();
                    explosionTime();
                    gameOver = true;
                    lossCount++;
                    paragraphs[1].textContent = `You have lost ${lossCount} times`;
                }
                if (timesToClick === 1 && iterator[i][j].textContent !== '💣' && gameOver === false) {
                    gameWon(iterator[i][j]);
                }
                if (timesToClick > 0 && iterator[i][j].className !== 'bomb' && gameOver === false && iterator[i][j].className !== 'clicked') {
                    timesToClick--;
                    console.log(timesToClick);
                }
                if (num === 0 && iterator[i][j].className !== 'bomb' && iterator[i][j].style.backgroundColor !== 'black' && iterator[i][j].className !== 'clear') {
                    iterator[i][j].textContent = '';
                    iterator[i][j].style.backgroundColor = 'darkSeaGreen';
                    iterator[i][j].classList.add('clicked');
                }
                if (num > 0 && iterator[i][j].className !== 'bomb' && iterator[i][j].style.backgroundColor !== 'black') {
                    iterator[i][j].textContent = num;
                    iterator[i][j].style.backgroundColor = 'green';
                    iterator[i][j].classList.add('clicked');
                }
            });
            iterator[i][j].addEventListener('contextmenu', function(e) {
                e.preventDefault();
                if (iterator[i][j].textContent === '') {
                    iterator[i][j].textContent = '🚩';
                    return;
                }
                if (iterator[i][j].textContent === '🚩') {
                    iterator[i][j].textContent = '';
                }
            }, false);
        }
    }
}

let smallArray = [];

function bombClicked() {
    for (let i = 0; i < iterator.length; i++) {
        for (let j = 0; j < iterator.length; j++) {
            if (iterator[i][j].className === 'bomb') {
                smallArray.push(iterator[i][j]);
            } else {
                iterator[i][j].style.backgroundColor = 'black';
                iterator[i][j].style.cursor = 'default';
                iterator[i][j].textContent = ' ';
            }
        }
    }
}

let i = 0;

function explosionTime() {
    setTimeout(function() {
        if (smallArray[i].textContent === '💣') {
            smallArray.splice(smallArray[i], 1);
        }
        smallArray[i].textContent = '💣';
        smallArray[i].style.backgroundColor = 'red';
        smallArray[i].style.cursor = 'default';
        i++;
        if (i < smallArray.length) {
            explosionTime();
        } else {
            i = 0;
            smallArray = [];
            return;
        }
    }, 1000);
}

const score = document.querySelector('summary');
const dropDown = document.querySelector('button');
score.style.width = main.style.width;

dropDown.addEventListener('click', function() {
    gameOver = false;
    removeSquares();
    makeSquares(main, squareAmount, setIds, generateBombs);
    timesToClick = squareAmount - gameSettings.bombs;
});