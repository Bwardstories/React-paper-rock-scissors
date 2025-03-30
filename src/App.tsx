import React from 'react';
import './App.css';

type Move = "rock" | "paper" | "scissors";
const MOVES: readonly Move[] = ["rock", "paper", "scissors"];

function App() {
  const [computerMove, setComputerMove] = React.useState<Move>(() => 
    MOVES[Math.floor(Math.random() * MOVES.length)]
  );

  return (
    <div className="App">
      <p>Computer Move: {computerMove}</p>
    </div>
  );
}

export default App;
