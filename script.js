const gameBoard = (() => {
    tile = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    row1 = [0, 0];
    row2 = [0, 0];
    row3 = [0, 0];
    column1 = [0, 0];
    column2 = [0, 0];
    column3 = [0, 0];

    return {tile, row1, row2, row3, column1, column2, column3};
})();

const player = (title, side) => {
   
    const placeTile = (tile) => {
        const tileDiv = document.getElementById(tile.target.id);
        const playerToken = document.createElement('h1');
        
            if (tile.target.id == 1 || tile.target.id == 2 || tile.target.id == 3) {
                gameBoard.row1[0]++;
                //console.log(gameBoard.row1[0])
            }
            else if (tile.target.id == 4 || tile.target.id == 5 || tile.target.id == 6) {
                gameBoard.row2[0]++;
                //console.log(gameBoard.row2[0])
            }
            else if (tile.target.id == 7 || tile.target.id == 8 || tile.target.id == 9) {
                gameBoard.row3[0]++;
                //console.log(gameBoard.row3[0])
            }

            if (tile.target.id == 1 || tile.target.id == 4 || tile.target.id == 7) {
                gameBoard.column1[0]++;
                //console.log(gameBoard.column1[0])
            }
            else if (tile.target.id == 2 || tile.target.id == 5 || tile.target.id == 8) {
                gameBoard.column2[0]++;
                //console.log(gameBoard.column2[0])
            }
            else if (tile.target.id == 3 || tile.target.id == 6 || tile.target.id == 9) {
                gameBoard.column3[0]++;
                //console.log(gameBoard.column3[0])
            }

            // Increases score for each row and column

        playerToken.innerText = side;
        tileDiv.appendChild(playerToken);
    };


    return {title, side, placeTile};

};

const player1 = player(1, "X");
const player2 = player(2, "O");

console.log(gameBoard.tile);

gameBoard.tile.forEach((tileNumber) => {
    const tileDiv = document.createElement('div');
    const gameboard = document.querySelector('.gameboard');

    tileDiv.classList.add('tile');
    tileDiv.setAttribute('id', tileNumber);

    tileDiv.addEventListener('click', player1.placeTile);
    
    gameboard.appendChild(tileDiv);
});