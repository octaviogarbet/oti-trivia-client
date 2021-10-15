import React from 'react'
import './new-game.css';

function NewGame(props) {
  
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

export default NewGame;
