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
      <p>Player Move: {playerMove ? playerMove : ""}</p>
      <button onClick={() => setPlayerMove("rock")}>Rock</button>
      <button onClick={() => setPlayerMove("paper")}>Paper</button>
      <button onClick={() => setPlayerMove("scissors")}>Scissors</button>
    </div>
  );
}

export default App;
 