import React, { useState } from 'react'
import './join.css';
import TextField from '@mui/material/TextField';
import { useHistory, useParams } from "react-router-dom";
import Button from '@mui/material/Button';

function Join(props) {
  const [player, setPlayer] = useState('');
  let { gameId } = useParams();
  let history = useHistory();

  const handleChangeName = ($event) => {
    setPlayer($event.target.value);
  }
  
  const handleJoin = () => {
    //TODO: Call backend join game
    localStorage.setItem(`${gameId}player`, JSON.stringify(player));
    history.push(`/player/${gameId}`);
  }

  return (
    <div className="control-pannel">
      <TextField
        id="player-name"
        label="Name"
        type="text"
        variant="standard"
        value={player}
        onChange={handleChangeName}
      />
      <div className="center-button">
        <Button title="Word Pass" className="button"  onClick={() => {handleJoin()}}>Join</Button>
      </div>
    </div>
  );
}

export default Join;