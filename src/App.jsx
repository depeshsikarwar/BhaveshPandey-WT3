import React, { useState } from 'react';
import playerdata from './data/players';
import Card from './Components/Card';


function App() {
 
  const [players, setPlayers] = useState(playerdata); 

  const teamsize = players.filter((player) => player.playing).length;
  
  
  const extras = players.length - teamsize; 

  function toggleactivity(id) {
    setPlayers((currentplayer) =>
      currentplayer.map((player) => {
        if (player.id === id) {
          
          return { ...player, playing: !player.playing };
        }
        return player;
      })
    );
  }

  return (
    <div>
      <h2>Total no. of Player : {players.length}</h2>
      <h2>No. of player currently playing : {teamsize}</h2>
      <h2>No. of extras : {extras}</h2>
      
      
      {players.map((player) => {
        return <Card key={player.id} player={player} onToggle={toggleactivity} />;
      })}
    </div>
  );
}

export default App;
