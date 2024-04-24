import React, { useState } from 'react'
import './Player.css';

 const Player = ({ name , currentSymbol , playerSymbol}) => {
    const [isEditing , setIsEditing] = useState("false");
    const [ playerName , setPlayerName] = useState("");

    const editNameHandler = ()=>{
    setIsEditing((currentEditingState) => !currentEditingState);
    }

 const playerNameHandler = (e) =>{
   setPlayerName(e.target.value);
 }

  return (
    <div className='col'>
        {isEditing ?(
            <span>
                <input type='text' placeholder='Enter Players Name' onInput={playerNameHandler} value={playerName}/>
            </span>
        ):(
            <span className={currentSymbol === playerSymbol ? "playerTurn" : ""}>{playerName.length > 0 ? playerName: name}</span>
        )}
        <span>
            <button onClick={editNameHandler} className='btn btn-primary sm- 2 ms-2'>
                {isEditing ? "save" : "edit"}
            </button>
        </span>
        

    </div>
  )
}

export default Player;