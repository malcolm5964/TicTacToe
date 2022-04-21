const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    return {board};
})();

const player = (name, symbol) => {
    return{name, symbol};
}
const player1 = player('Player 1', '-1');
const player2 = player('Player 2', '1');

const render = (() =>  {
    const {board} = gameBoard;
    
    function renderMoves() {
        for(let i=0; i < board.length; i++) 
        {
            const targetBox = document.getElementById(`${i}`);
            targetBox.innerHTML = board[i].replace("-1", "X").replace("1", "O");
        }
    }

    return {renderMoves}
})()


const play = (() => {

    const {board} = gameBoard;
    let symbol = '';
    let winnningPlayer = '';
    const {renderMoves} = render;

    const markSpot = (e) => {
        console.log(e.target.id)
        const boardArrayIndex = board[`${e.target.id}`];
        if(symbol === '') {
            symbol = player1.symbol;
            console.log(symbol)
            if (boardArrayIndex === '') {
                board.splice(e.target.id, 1, symbol);
            }
        }
        else if(symbol === player1.symbol) {
            symbol = player2.symbol;
            winnningPlayer = "Player 2 is the winner!"
            if (boardArrayIndex === '') {
                board.splice(e.target.id, 1, symbol);
            }
        }    
        else if(symbol === player2.symbol){
            symbol = player1.symbol;
            winnningPlayer = "Player 1 is the winner!"
            if (boardArrayIndex === '') {
                board.splice(e.target.id, 1, symbol);
            }
        }

        renderMoves();
        checkWinner();
    }

    function checkWinner() {
        winnerText = document.getElementById("winnerText")
        if ((+board[0] + +board[1] + +board[2]) == 3 || (+board[0] + +board[1] + +board[2]) == -3) {removeClick(); winnerText.textContent = winnningPlayer; symbol = ""; return;}
        if ((+board[6] + +board[7] + +board[8]) == 3 || (+board[6] + +board[7] + +board[8]) == -3) {removeClick(); winnerText.textContent = winnningPlayer; symbol = ""; return;}
        if ((+board[3] + +board[4] + +board[5]) == 3 || (+board[3] + +board[4] + +board[5]) == -3) {removeClick(); winnerText.textContent = winnningPlayer; symbol = ""; return;}
        if ((+board[0] + +board[3] + +board[6]) == 3 || (+board[0] + +board[3] + +board[6]) == -3) {removeClick(); winnerText.textContent = winnningPlayer; symbol = ""; return;}
        if ((+board[1] + +board[4] + +board[7]) == 3 || (+board[1] + +board[4] + +board[7]) == -3) {removeClick(); winnerText.textContent = winnningPlayer; symbol = ""; return;}
        if ((+board[2] + +board[5] + +board[8]) == 3 || (+board[2] + +board[5] + +board[8]) == -3) {removeClick(); winnerText.textContent = winnningPlayer; symbol = ""; return;}
        if ((+board[0] + +board[4] + +board[8]) == 3 || (+board[0] + +board[4] + +board[8]) == -3) {removeClick(); winnerText.textContent = winnningPlayer; symbol = ""; return;}
        if ((+board[2] + +board[4] + +board[6]) == 3 || (+board[2] + +board[4] + +board[6]) == -3) {removeClick(); winnerText.textContent = winnningPlayer; symbol = ""; return;}
        if (!board.includes("")){removeClick(); winnerText.textContent = "Game is a Draw"; symbol = ""; return;}
    }

    const buttons = document.querySelectorAll('.grid-item');

    function addClick(){
        buttons.forEach((button) => {
            button.addEventListener('click', markSpot);
    })
    }

    function removeClick(){
        console.log("remove event")
        buttons.forEach((button) => {
            button.removeEventListener('click', markSpot);
    })        
    }
    
    addClick();


    let newGameBtn = document.querySelector('.newGameBtn');
    newGameBtn.addEventListener('click', () => {
        for(let i=0; i < board.length; i++) {
            board[i] = '';
        }
        winnerText.textContent = "";

        addClick();
        renderMoves();
    })

})()





