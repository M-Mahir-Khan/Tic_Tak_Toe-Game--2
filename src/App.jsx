import { useState, useEffect, useRef } from 'react';
import './App.css';


import Board from './Components/Board';
import ScoreBoard from './Components/Scoreboard';
import TurnInfo from './Components/TurnInfo';
import RestartButton from './Components/RestartButton';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [winner, setWinner] = useState(null);
  const [winningCombo, setWinningCombo] = useState([]);

  // Refs for sounds
  const clickSound = useRef(null);
  const winSound = useRef(null);
  const tieSound = useRef(null);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  function checkWinner(updatedBoard) {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (updatedBoard[a] && updatedBoard[a] === updatedBoard[b] && updatedBoard[a] === updatedBoard[c]) {
        setWinner(updatedBoard[a]);
        setWinningCombo(combo);
        winSound.current.play();

        if (updatedBoard[a] === 'X') setXScore((prev) => prev + 1);
        else setOScore((prev) => prev + 1);

        setTimeout(resetBoard, 2000);
        return;
      }
    }

    if (updatedBoard.every(cell => cell !== null)) {
      setWinner('Tie');
      tieSound.current.play();
      setTimeout(resetBoard, 2000);
    }
  }

  function resetBoard() {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setWinningCombo([]);
    setIsXTurn(true);
  }

  function handleBoxClick(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
    clickSound.current.play();
    checkWinner(newBoard);
  }

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4 display-5 fw-bold text-primary">🎮 Tic Tac Toe</h1>

      {/*  Sound Elements */}
      <audio ref={clickSound} src="/sounds/click.mp3" preload="auto" />
      <audio ref={winSound} src="/sounds/win.mp3" preload="auto" />
      <audio ref={tieSound} src="/sounds/tie.m4a" preload="auto" />

      <ScoreBoard xScore={xScore} oScore={oScore} winner={winner} />
      <TurnInfo isXTurn={isXTurn} winner={winner} />
      <Board board={board} handleBoxClick={handleBoxClick} winningCombo={winningCombo} />
      <RestartButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
