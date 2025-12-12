# 🎲 Dice Guessing Game

A modern, interactive dice guessing game built with React and Vite. Test your luck and strategic thinking by selecting numbers and rolling dice to accumulate points!

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [How to Play](#how-to-play)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## 🎮 Project Overview

The Dice Guessing Game is an engaging web-based game where players select numbers between 1-6 and roll a virtual dice. Players earn points for correct predictions and lose points for incorrect ones. The game features a clean, modern UI with real-time score tracking and intuitive gameplay mechanics.

This project demonstrates best practices in React development, including component composition, state management, styled-components for styling, and a smooth user experience with Vite's fast build tooling.

## ✨ Features

- **Interactive Gameplay**: Select numbers and roll dice with instant feedback
- **Score Tracking**: Real-time score updates and the ability to reset scores
- **Responsive Design**: Fully responsive UI that works across devices
- **Game Rules**: Built-in game rules display for new players
- **Modern UI**: Styled with styled-components for consistent, maintainable styling
- **Error Handling**: User-friendly error messages for invalid actions
- **Fast Development**: Powered by Vite with Hot Module Replacement (HMR) for instant updates during development

## 🛠️ Tech Stack

### Frontend Framework
- **React** (v19.1.0) - A JavaScript library for building user interfaces with component-based architecture

### Build Tool
- **Vite** (v6.3.5) - Next-generation frontend build tool providing lightning-fast development server and optimized production builds

### Styling
- **Styled-Components** (v6.1.18) - CSS-in-JS library for writing scoped, dynamic styles with JavaScript

### Development Tools
- **ESLint** - Code quality and linting
- **Babel** (via @vitejs/plugin-react) - JavaScript transpiler for modern syntax support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Usually comes with Node.js
- **Git** (optional, for cloning the repository)

## 📦 Installation

1. **Clone the repository** (if applicable):
```bash
git clone https://github.com/yogesh7547/Dice-guessing-game.git
cd Dice-guessing-game
```

2. **Install dependencies**:
```bash
npm install
```

## 🚀 Running the Project

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port). The page will automatically refresh when you make changes to the code.

### Production Build

Create an optimized production build:

```bash
npm run build
```

This generates a `dist` folder with minified and optimized files ready for deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Linting

Check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
dice-guessing-game/
├── src/
│   ├── components/              # React components
│   │   ├── StartGame.jsx        # Initial game screen
│   │   ├── GamePlay.jsx         # Main game logic and state management
│   │   ├── NumberSelector.jsx   # Number selection interface
│   │   ├── RollDice.jsx         # Dice rolling display
│   │   ├── TotalScore.jsx       # Score display component
│   │   └── Rules.jsx            # Game rules display
│   ├── styled/
│   │   └── Button.js            # Styled button components
│   ├── assets/                  # Static assets
│   ├── App.jsx                  # Root component
│   ├── App.css                  # App styles
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles
├── public/
│   └── images/                  # Public images and dice graphics
├── package.json                 # Project dependencies and scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point
└── README.md                   # Project documentation
```

## 🎯 How to Play

1. **Start Game**: Click the "Play Now" button on the landing page to begin
2. **Select a Number**: Choose a number between 1 and 6
3. **Roll the Dice**: Click the "Roll Dice" button to roll
4. **Check Results**:
   - ✅ **Correct Match**: You win points equal to the dice number
   - ❌ **No Match**: You lose 2 points
5. **View Rules**: Click "Show Rules" to see the game rules at any time
6. **Reset Score**: Click "Reset Score" to start over
7. **Play Again**: Use the toggle to return to the start screen

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server with HMR |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check code quality |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Gaming! 🎲** Feel free to reach out with questions or suggestions!
