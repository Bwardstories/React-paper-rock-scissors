import React from 'react';
import logo from './logo.svg';
import './App.css';

type Move = "rock" | "paper" | "scissors";
const MOVES: readonly Move[] = ["rock", "paper", "scissors"];

function App() {
  const [computerMove, setComputerMove] = React.useState<Move>("rock");
  return (
    <div className="App">
      Computer Move: {computerMove}
    </div>
  );
}


export default App;
