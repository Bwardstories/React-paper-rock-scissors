import { useState } from 'react';
import './App.css';

type Move = "rock" | "paper" | "scissors";
const MOVES: readonly Move[] = ["rock", "paper", "scissors"];

function App() {
  const [computerMove, setComputerMove] = useState<Move>(() => 
    MOVES[Math.floor(Math.random() * MOVES.length)]
  );
  const [playerMove, setPlayerMove] = useState<Move | null>(null);

  return (
    <div className="App">
      <p>Computer Move: {computerMove}</p>
    </div>
  );
}

export default App;
 