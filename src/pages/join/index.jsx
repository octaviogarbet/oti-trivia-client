import React from 'react'
import './join.css';

function Join(props) {
  
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

export default Join;
