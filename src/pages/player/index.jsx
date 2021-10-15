import React from 'react'
import './player.css';

function Player(props) {
  
  const handlePush = () => {

  }

  return (
    <div className="control-pannel">
      <div className="center-button">
        <button title="Word Pass" className="button"  onClick={() => handlePush}>PUSH</button>
      </div>
    </div>
  );
}

export default Player;
