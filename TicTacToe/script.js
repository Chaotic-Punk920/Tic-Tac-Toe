// Game State
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// Winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Get DOM elements
const cells = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('gameStatus');
const resetBtn = document.getElementById('resetBtn');

// Initialize game
function initializeGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    gameStatus.textContent = "Player X's Turn";
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.className = 'cell';
        cell.disabled = false;
    });
}

// Check for winner
function checkWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (gameBoard[a] !== '' && 
            gameBoard[a] === gameBoard[b] && 
            gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return null;
}

// Check for draw
function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

// Handle cell click
function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');

    // Prevent clicking if cell is already filled or game is not active
    if (gameBoard[index] !== '' || !gameActive) {
        return;
    }

    // Update game state
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());
    cell.disabled = true;

    // Check for winner
    const winner = checkWinner();
    if (winner) {
        gameStatus.textContent = `🎉 Player ${winner} Wins! 🎉`;
        gameActive = false;
        disableAllCells();
        return;
    }

    // Check for draw
    if (checkDraw()) {
        gameStatus.textContent = "🤝 It's a Draw!";
        gameActive = false;
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.textContent = `Player ${currentPlayer}'s Turn`;
}

// Disable all cells
function disableAllCells() {
    cells.forEach(cell => {
        cell.disabled = true;
    });
}

// Event listeners
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetBtn.addEventListener('click', initializeGame);

// Initialize game on page load
initializeGame();
