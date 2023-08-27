const gameBoard = (() => {
    tile = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return {tile};
})();

const player = (title, side) => {
   
    return {title, side};

};

const player1 = player(1, "X");
const player2 = player(2, "O");

console.log(gameBoard.tile);

gameBoard.tile.forEach(() => {
    const tileDiv = document.createElement('div');
    const gameboard = document.querySelector('.gameboard');

    tileDiv.classList.add('tile');

    tileDiv.addEventListener('click', () => {

    })
    
    gameboard.appendChild(tileDiv);
});