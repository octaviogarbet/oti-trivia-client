import React from 'react'
import './join.css';
import TextField from '@mui/material/TextField';

function Join(props) {
  
  const handleJoin = () => {

  }

  return (
    <div className="control-pannel">
      <TextField
          id="player-name"
          label="Name"
          type="text"
          variant="standard"
        />
      <div className="center-button">
        <button title="Word Pass" className="button"  onClick={() => handleJoin}>Join</button>
      </div>
    </div>
  );
}

export default Join;
