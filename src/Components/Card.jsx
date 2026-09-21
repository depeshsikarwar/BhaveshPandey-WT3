import React from 'react'
import './Card.css'

function Card({player , onToggle}) {
    let playerstatus;
    let buttontext;

    if(player.playing){
        playerstatus="Currently Playing";
        buttontext="Deselect";
    }
    else{
        playerstatus="Not Playing";
        buttontext="Select";
    }
  return (
    <div>
        <p>Player Name : {player.name}</p>
        <p>Role : {player.role}</p>
        <p>Status : {playerstatus}</p>
        <p>Runs : {player.runs}</p>
        <button
        onClick={()=>{onToggle(player.id)}}>
            {buttontext}
        </button>
    </div>
  )
}

export default Card