# Tic Tac Toe Game

A fully functional, interactive tic-tac-toe game built with HTML, CSS, and JavaScript. **Now with offline support and downloadable for local use!**

## How to Play

1. **Open the Game**: Open `index.html` in your web browser
2. **Take Turns**: Player X goes first. Click on any empty cell to place your mark
3. **Win the Game**: Get three of your marks in a row (horizontally, vertically, or diagonally) to win
4. **Draw**: If all 9 cells are filled with no winner, the game ends in a draw
5. **Reset**: Click the "Reset Game" button to start a new game anytime

## Game Rules

- Players alternate turns between X and O
- Each player can only place their mark in an empty cell
- A player wins by getting 3 marks in a row (straight line or diagonal)
- If all cells are filled and there's no winner, the game is a draw
- The game automatically detects wins and draws

## Files

- `index.html` - Game structure and layout
- `style.css` - Styling and responsive design
- `script.js` - Game logic and interactivity

## Features

✨ **Two-Player Gameplay** - Play against a friend
🎨 **Beautiful Design** - Modern UI with smooth animations
📱 **Responsive** - Works great on desktop and mobile devices
⚡ **Instant Feedback** - Real-time game status updates
🔄 **Easy Reset** - Start a new game with one click

## Getting Started

### Option 1: Online Play
1. Make sure you have a modern web browser (Chrome, Firefox, Safari, Edge)
2. Navigate to the TicTacToe folder
3. Double-click `index.html` to open it in your browser
4. Start playing!

### Option 2: Download & Play Offline
1. **Download the ZIP file**: Click the green "Code" button at the top of the repository and select "Download ZIP"
   - **OR** run one of the helper scripts:
     - **Linux/Mac**: `bash create-download.sh`
     - **Any System**: `python3 create-download.py`
   - This creates `TicTacToe-Offline.zip` with all necessary files
2. **Extract the files**: Unzip the downloaded file to any location on your computer
3. **Open the game**: Navigate to the TicTacToe folder and double-click `index.html`
4. **Works offline**: Once loaded, the game works completely offline (no internet required)

### Option 3: Install as PWA (Progressive Web App)
1. Open `index.html` in Chrome, Edge, or other Chromium-based browser
2. Look for the **"Install"** button in the address bar (or in the menu)
3. Click **"Install"** to install the app on your device
4. The game will appear as a standalone app that works offline

## Offline Features

✅ **Complete Offline Support** - Works without internet connection  
✅ **Service Worker** - Automatic caching for instant loading  
✅ **Installable App** - Add to home screen on mobile or desktop  
✅ **Zero Dependencies** - Pure HTML, CSS, and JavaScript  

## Files

- `index.html` - Game structure and layout
- `style.css` - Styling and responsive design
- `script.js` - Game logic and interactivity
- `manifest.json` - PWA configuration for app installation
- `service-worker.js` - Offline caching and support
- `README.md` - Documentation

Enjoy the game! 🎮
