import React, { useState } from 'react'
import Player from './Player';
import GameBoard from './GameBoard';
import  './PlayerDetails.css';

 const PlayerDetails = () => {
    const [playerSymbol , setPlayerSymbol] = useState("X");
  
    const changeSymbol = () => {
      setPlayerSymbol((currentSymbol) => (currentSymbol === "X" ? "O" : "X"));
    };
    
  return (
    <div className='playersDetailsContainer'>
        <div className = 'playerDetails'>
    <div className='container'>
        <div className='row'>
            <Player
          playerSymbol = "X"
          currentSymbol = {playerSymbol}
          name = "player 1"
            />
             <Player
          playerSymbol = "O"
          currentSymbol = {playerSymbol}
          name = "player 2"
            />
            </div>
            <div className="row mt-5">
            <GameBoard symbol={playerSymbol} onClickButton={changeSymbol} />
          </div>
        </div>
    </div>

</div>
  )
}
export default PlayerDetails;