function makeSquares(main, squareAmount, setIds, generateBombs) {
    for (let i = 0; i < squareAmount; i++) {
        let div = document.createElement('div');
        main.appendChild(div);
    }
    const squaresArray = document.querySelectorAll('div');
    setIds(squaresArray);
    generateBombs();
}

export default makeSquares;