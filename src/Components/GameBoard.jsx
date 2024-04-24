import React, { useState } from 'react'
import './GameBoard.css';

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const winningConditions = [
  [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
  ],
  [
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
  ],
  [
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 2, col: 0 },
  ],
  [
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 1 },
    { row: 2, col: 0 },
  ]
];

 const GameBoard = ({onClickButton , symbol}) => {
  const [ isWinner, setIsWinner] = useState('');
   const [ gameBoard , setGameBoard] = useState(initialBoard);

   const handleClickSymbol = (rowIndex , colIndex)=>{
    onClickButton();
    setGameBoard ((currentBoard) =>{
     let updateBoard = [
      ...currentBoard.map((insideArray) => [...insideArray])
     ]
     updateBoard[rowIndex][colIndex] = symbol;
        return updateBoard;
    })
     }
   let winner = null;
   for(const condition of winningConditions){
    let firstSymbol = gameBoard[condition[0].row][condition[0].col];
    let secondSymbol = gameBoard[condition[1].row][condition[1].col];
    let thirdSymbol = gameBoard[condition[2].row][condition[2].col];

    if(firstSymbol && firstSymbol===secondSymbol && secondSymbol===thirdSymbol){
      winner = 1;
      setIsWinner(firstSymbol);
      console.log(`The winner is ${winner}`);
      break;
    }
  }

  return (
<ol style = {{listStyleType: "none"}}>
  {isWinner && <p>{isWinner}</p>}
  {gameBoard.map((row,rowIndex) => {
    return (
      <li key = {rowIndex}>
        <ol>
         {row.map((col , colIndex) => {
           return (
            <li key = {colIndex} className='boardRow'>
              <button onClick={() => handleClickSymbol(rowIndex , colIndex)} disabled={col}>
                {col}
              </button>
         </li>
           ) 
          })}
        </ol>
      </li>
    )
  })}
</ol>
        
    
  )
}
export default GameBoard;
