const gameBoard = (() => {
    tile = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    const nextTurn = () => {

        // Checks number of tokens in each row to determine if player has won the game
        currentPlayer.rows.forEach((row) => {
            const tileDiv = document.createElement('h1');
            const page = document.querySelector('body');
            
            if (currentPlayer == player1) {
                tileDiv.innerText = "Player 1 wins!";
            } else {
                tileDiv.innerText = "Player 2 wins!";
            }
            

            if (row == 3) {
                page.appendChild(tileDiv);
            }
        });

        // Checks number of tokens in each column to determine if player has won the game
        currentPlayer.columns.forEach((column) => {
            const tileDiv = document.createElement('h1');
            const page = document.querySelector('body');
            
            if (currentPlayer == player1) {
                tileDiv.innerText = "Player 1 wins!";
            } else {
                tileDiv.innerText = "Player 2 wins!";
            }

            if (column == 3) {
                page.appendChild(tileDiv);
            }
        });

        // Checks number of tokens in each diagonal to determine if player has won the game
        currentPlayer.diagonals.forEach((diagonal) => {
            const tileDiv = document.createElement('h1');
            const page = document.querySelector('body');
            
            if (currentPlayer == player1) {
                tileDiv.innerText = "Player 1 wins!";
            } else {
                tileDiv.innerText = "Player 2 wins!";
            }

            if (diagonal == 3) {
                page.appendChild(tileDiv);
            }
        });

        if (currentPlayer == player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
        console.log(currentPlayer);
    }


    return {tile, nextTurn};
})();



const player = (title, side) => {

    let rows = [0, 0, 0];

    let columns = [0, 0, 0];

    let diagonals = [0, 0];

   
    const placeTile = (tile) => {
        const tileDiv = document.getElementById(tile.target.id);
        const playerToken = document.createElement('h1');
            
            // This checks that tile is empty
            if (tileDiv.innerText == false) {       
                
                // Tracks number of x/o's placed in each row, column and diagonal
                if (tile.target.id == 1 || tile.target.id == 2 || tile.target.id == 3) {        
                    currentPlayer.rows[0]++;
                    //console.log(row1);
                }
                else if (tile.target.id == 4 || tile.target.id == 5 || tile.target.id == 6) {
                    currentPlayer.rows[1]++;
                    //console.log(gameBoard.row2[0])
                }
                else if (tile.target.id == 7 || tile.target.id == 8 || tile.target.id == 9) {
                    currentPlayer.rows[2]++;
                    //console.log(gameBoard.row3[0])
                }
    
                if (tile.target.id == 1 || tile.target.id == 4 || tile.target.id == 7) {
                    currentPlayer.columns[0]++;
                    //console.log(gameBoard.column1[0])
                }
                else if (tile.target.id == 2 || tile.target.id == 5 || tile.target.id == 8) {
                    currentPlayer.columns[1]++;
                    //console.log(gameBoard.column2[0])
                }
                else if (tile.target.id == 3 || tile.target.id == 6 || tile.target.id == 9) {
                    currentPlayer.columns[2]++;
                    //console.log(gameBoard.column3[0])
                }
    
                if (tile.target.id == 1 || tile.target.id == 5 || tile.target.id == 9) {
                    currentPlayer.diagonals[0]++;
                    //console.log(gameBoard.column3[0])
                }
                if (tile.target.id == 3 || tile.target.id == 5 || tile.target.id == 7) {
                    currentPlayer.diagonals[1]++;
                    //console.log(gameBoard.column3[0])
                }
    
                
            // Places player token and progresses turn to next player
            playerToken.innerText = currentPlayer.side;     
            tileDiv.appendChild(playerToken);
            gameBoard.nextTurn();       
            

            }

            
    };


    return {title, side, placeTile, rows, columns, diagonals};

};

const player1 = player(1, "X");
const player2 = player(2, "O");
let currentPlayer = player1;

console.log(gameBoard.tile);

// Creates the tiles
gameBoard.tile.forEach((tileNumber) => {        
    const tileDiv = document.createElement('div');
    const gameboard = document.querySelector('.gameboard');

    tileDiv.classList.add('tile');
    tileDiv.setAttribute('id', tileNumber);

    tileDiv.addEventListener('click', currentPlayer.placeTile);
    
    gameboard.appendChild(tileDiv);
});
