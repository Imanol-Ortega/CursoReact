/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react"
import { Square } from "./componentes/Square.jsx"
import { TURNS } from "./constantes.js"
import { checkWinner,checkEndGame } from "./logic/board.js"
import { Winner } from "./componentes/Winner.jsx"

function App() {
  const [board,setBoard] = useState(Array(9).fill(null))
  const [turn,setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index)=>{
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    

    const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }


  return (
    <>
    <main className="board">
      <h1>Tres En Raya</h1>
      <section className="game">
        { 
        board.map((square,index)=>{
        return(
          <Square key={index} index={index} updateBoard={updateBoard}>{square}</Square>
        )
      })}
      </section>
      <section className="turn">
        <Square isSelected = {turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected = {turn === TURNS.O}>{TURNS.O}</Square>
      </section>
       <Winner resetGame={resetGame} winner={winner}/>
    </main>
    </>
  )
}

export default App
