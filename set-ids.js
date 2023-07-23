export default function setIds(squaresArray, gameSettings, row1, row2, row3, row4, row5, row6, row7, row8, tempArray, boxes) {
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