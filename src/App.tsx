import { useState } from 'react'
import './App.css'

const MOVES = ['rock', 'paper', 'scissors'] as const
type Move = (typeof MOVES)[number]

function getRandomMove(): Move {
  return MOVES[Math.floor(Math.random() * MOVES.length)]
}

function determineWinner(
  playerMove: Move,
  computerMove: Move,
): 'win' | 'lose' | 'tie' {
  if (playerMove === computerMove) return 'tie'
  if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    return 'win'
  }
  return 'lose'
}

function App() {
  const [computerMove, setComputerMove] = useState<Move>(getRandomMove)
  const [playerMove, setPlayerMove] = useState<Move | null>(null)
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)
  const [ties, setTies] = useState(0)

  const handlePlayerMove = (move: Move) => {
    const newComputerMove = getRandomMove()
    setPlayerMove(move)
    setComputerMove(newComputerMove)

    const result = determineWinner(move, newComputerMove)

    if (result === 'win') {
      setWins(wins + 1)
    } else if (result === 'lose') {
      setLosses(losses + 1)
    } else {
      setTies(ties + 1)
    }
  }

  const handleNewGame = () => {
    setPlayerMove(null)
    setComputerMove(getRandomMove())
  }

  return (
    <div className="mainContainer">
      {playerMove === null ? (
        <div className="moveDisplayContainer">
          <p>Pick your move:</p>
          <div className="buttonContainer">
            <button onClick={() => handlePlayerMove('rock')}>🪨</button>
            <button onClick={() => handlePlayerMove('paper')}>📄</button>
            <button onClick={() => handlePlayerMove('scissors')}>✂️</button>
          </div>
        </div>
      ) : (
        <>
          <p>Computer Move: {computerMove}</p>
          <p>Player Move: {playerMove}</p>
          <p>
            Result:{' '}
            {determineWinner(playerMove, computerMove) === 'win'
              ? 'You win!'
              : determineWinner(playerMove, computerMove) === 'lose'
                ? 'Computer wins!'
                : "It's a tie!"}
          </p>

          {losses >= 5 && (
            <p>
              The computer has beaten you to 5 wins... world domination is
              imminent! 🤖💀
            </p>
          )}

          <button onClick={handleNewGame}>New Game</button>
        </>
      )}

      <div className="resultsContainer">
        <h3>Game Results:</h3>
        <p>Wins: {wins} 🏆</p>
        <p>Losses: {losses} 💀</p>
        <p>Ties: {ties} 🤝</p>
      </div>
    </div>
  )
}

export default App
