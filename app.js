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
        let bomb = boxes[randomNum][randomNum2];
        for (let i = 0; i < bombArr.length; i++) {
            if (bomb === bombArr[i]) {
                let newRandomNum = Math.floor(Math.random() * gameSettings.gameSize);
                let newRandomNum2 = Math.floor(Math.random() * gameSettings.gameSize);
                bomb = boxes[newRandomNum][newRandomNum2];
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
        firstClick = true;
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
        firstClick = true;
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
        firstClick = true;
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
        firstClick = true;
    }
}, false);

let tempArray = [];
let boxes = [];

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
    boxes = [];
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
                    boxes.push(tempArray[i]);
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
    paragraphs[0].textContent = `Wins: ${winCount}`;
    for (let j = 0; j < boxes.length; j++) {
        for (let k = 0; k < boxes[j].length; k++) {
            boxes[j][k].style.cursor = 'default';
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
    for (let i = 0; i < boxes.length; i++) {
        for (let j = 0; j < boxes[i].length; j++) {
            let num = 0;
            if (j < boxes.length - 1 && boxes[i][j + 1].className === 'bomb') {
                num++;
            }
            if (j > 0 && boxes[i][j - 1].className === 'bomb') {
                num++;
            }
            if (i < boxes.length - 1 && j > 0 && boxes[i + 1][j - 1].className === 'bomb') {
                num++;
            }
            if (i < boxes.length - 1 && boxes[i + 1][j].className === 'bomb') {
                num++;
            }
            if (i < boxes.length - 1 && j < boxes.length - 1 && boxes[i + 1][j + 1].className === 'bomb') {
                num++;
            }
            if (i > 0 && j < boxes.length - 1 && boxes[i - 1][j + 1].className === 'bomb') {
                num++;
            }
            if (i > 0 && boxes[i - 1][j].className === 'bomb') {
                num++;
            }
            if (i > 0 && j > 0 && boxes[i - 1][j - 1].className === 'bomb') {
                num++; 
            }
            if (boxes[i][j].className !== 'bomb') {
                boxes[i][j].className = num;
            }
            boxes[i][j].addEventListener('click', function detectBomb() {
                if (firstClick && j < boxes.length - 1 && boxes[i][j + 1].className !== 'bomb') {
                    if (boxes[i][j + 1].classList.contains('0')) {
                        boxes[i][j + 1].style.backgroundColor = 'darkSeaGreen';
                        boxes[i][j + 1].textContent = '';
                        timesToClick--;
                    } else {
                        boxes[i][j + 1].textContent = boxes[i][j + 1].className;
                        boxes[i][j + 1].classList.add('clicked');
                        boxes[i][j + 1].style.backgroundColor = 'green';
                        timesToClick--;
                    }
                }
                if (firstClick && j > 0 && boxes[i][j - 1].className !== 'bomb') {
                    if (boxes[i][j - 1].classList.contains('0')) {
                        boxes[i][j - 1].style.backgroundColor = 'darkSeaGreen';
                        boxes[i][j - 1].textContent = '';
                        timesToClick--;
                    } else {
                        boxes[i][j - 1].textContent = boxes[i][j - 1].className;
                        boxes[i][j - 1].classList.add('clicked');
                        boxes[i][j - 1].style.backgroundColor = 'green';
                        timesToClick--;
                    }
                }
                if (firstClick && i < boxes.length - 1 && boxes[i + 1][j].className !== 'bomb') {
                    if (boxes[i + 1][j].classList.contains('0')) {
                        boxes[i + 1][j].style.backgroundColor = 'darkSeaGreen';
                        boxes[i + 1][j].textContent = '';
                        timesToClick--;
                    } else {
                        boxes[i + 1][j].textContent = boxes[i + 1][j].className;
                        boxes[i + 1][j].classList.add('clicked');
                        boxes[i + 1][j].style.backgroundColor = 'green';
                        timesToClick--;
                    }
                }
                if (firstClick && j > 0 && boxes[i - 1][j].className !== 'bomb') {
                    if (boxes[i - 1][j].classList.contains('0')) {
                        boxes[i - 1][j].style.backgroundColor = 'darkSeaGreen';
                        boxes[i - 1][j].textContent = '';
                        timesToClick--;
                    } else {
                        boxes[i - 1][j].textContent = boxes[i - 1][j].className;
                        boxes[i - 1][j].classList.add('clicked');
                        boxes[i - 1][j].style.backgroundColor = 'green';
                        timesToClick--;
                    }
                }
                if (firstClick && j > 0 && i > boxes.length - 1 && boxes[i][j + 1].className !== 'bomb') {
                    if (boxes[i - 1][j + 1].classList.contains('0')) {
                        boxes[i - 1][j + 1].style.backgroundColor = 'darkSeaGreen';
                        boxes[i - 1][j + 1].textContent = '';
                        timesToClick--;
                    } else {
                        boxes[i - 1][j + 1].textContent = boxes[i - 1][j + 1].className;
                        boxes[i - 1][j + 1].classList.add('clicked');
                        boxes[i - 1][j + 1].style.backgroundColor = 'green';
                        timesToClick--;
                    }
                    firstClick = false;
                }
                if (firstClick && j < boxes.length - 1 && boxes[i][j + 1].className !== 'bomb') {
                    if (boxes[i][j + 1].classList.contains('0')) {
                        boxes[i][j + 1].style.backgroundColor = 'darkSeaGreen';
                        boxes[i][j + 1].textContent = '';
                    } else {
                        boxes[i][j + 1].textContent = boxes[i][j + 1].className;
                        boxes[i][j + 1].classList.add('clicked');
                        boxes[i][j + 1].style.backgroundColor = 'green';
                    }
                    firstClick = false;
                }
                if (firstClick && j < boxes.length - 1 && boxes[i][j + 1].className !== 'bomb') {
                    if (boxes[i][j + 1].classList.contains('0')) {
                        boxes[i][j + 1].style.backgroundColor = 'darkSeaGreen';
                        boxes[i][j + 1].textContent = '';
                    } else {
                        boxes[i][j + 1].textContent = boxes[i][j + 1].className;
                        boxes[i][j + 1].classList.add('clicked');
                        boxes[i][j + 1].style.backgroundColor = 'green';
                    }
                    firstClick = false;
                }
                if (firstClick && j < boxes.length - 1 && boxes[i][j + 1].className !== 'bomb') {
                    if (boxes[i][j + 1].classList.contains('0')) {
                        boxes[i][j + 1].style.backgroundColor = 'darkSeaGreen';
                        boxes[i][j + 1].textContent = '';
                    } else {
                        boxes[i][j + 1].textContent = boxes[i][j + 1].className;
                        boxes[i][j + 1].classList.add('clicked');
                        boxes[i][j + 1].style.backgroundColor = 'green';
                    }
                    firstClick = false;
                }
                if (firstClick && j < boxes.length - 1 && boxes[i][j + 1].className !== 'bomb') {
                    if (boxes[i][j + 1].classList.contains('0')) {
                        boxes[i][j + 1].style.backgroundColor = 'darkSeaGreen';
                        boxes[i][j + 1].textContent = '';
                    } else {
                        boxes[i][j + 1].textContent = boxes[i][j + 1].className;
                        boxes[i][j + 1].classList.add('clicked');
                        boxes[i][j + 1].style.backgroundColor = 'green';
                    }
                    firstClick = false;
                }
                if (num > 0) {
                    boxes[i][j].textContent = num;
                }
                if (boxes[i][j].className === 'bomb') {
                    boxes[i][j].textContent = '💣';
                    boxes[i][j].style.backgroundColor = 'red';
                    boxes[i][j].style.cursor = 'default';
                    bombClicked();
                    explosionTime();
                    gameOver = true;
                    lossCount++;
                    paragraphs[1].textContent = `Losses: ${lossCount}`;
                }
                if (timesToClick === 1 && boxes[i][j].textContent !== '💣' && gameOver === false) {
                    gameWon(boxes[i][j]);
                }
                if (timesToClick > 0 && boxes[i][j].className !== 'bomb' && gameOver === false && !(boxes[i][j].classList.contains('clicked'))) {
                    timesToClick--;
                    firstClick = false;
                }
                if (num === 0 && boxes[i][j].className !== 'bomb' && boxes[i][j].style.backgroundColor !== 'black' && boxes[i][j].className !== 'clear') {
                    boxes[i][j].textContent = '';
                    boxes[i][j].style.backgroundColor = 'darkSeaGreen';
                    boxes[i][j].classList.add('clicked');
                }
                if (num > 0 && boxes[i][j].className !== 'bomb' && boxes[i][j].style.backgroundColor !== 'black') {
                    boxes[i][j].textContent = num;
                    boxes[i][j].style.backgroundColor = 'green';
                    boxes[i][j].classList.add('clicked');
                }
            });
            boxes[i][j].addEventListener('contextmenu', function(e) {
                e.preventDefault();
                if (boxes[i][j].textContent === '') {
                    boxes[i][j].textContent = '🚩';
                    return;
                }
                if (boxes[i][j].textContent === '🚩') {
                    boxes[i][j].textContent = '';
                }
            }, false);
        }
    }
}

let smallArray = [];

function bombClicked() {
    for (let i = 0; i < boxes.length; i++) {
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[i][j].className === 'bomb') {
                smallArray.push(boxes[i][j]);
            } else {
                boxes[i][j].style.backgroundColor = 'black';
                boxes[i][j].style.cursor = 'default';
                boxes[i][j].textContent = ' ';
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
    firstClick = true;
    removeSquares();
    makeSquares(main, squareAmount, setIds, generateBombs);
    timesToClick = squareAmount - gameSettings.bombs;
});