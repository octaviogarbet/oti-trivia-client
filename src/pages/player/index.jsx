import React, { useEffect, useState } from 'react';
import {
  useParams
} from "react-router-dom";
import './player.css';

function Player(props) {
  let { gameId } = useParams();

  const [game, setGame] = useState({banned: false, canPush: true});

  useEffect(() => {
    //TODO: get data from backend and websockets
    const savedData = JSON.parse(localStorage.getItem(gameId + 'player'));
    console.log(savedData);
  }, [gameId]);
  
  const handlePush = () => {
    //TODO: call backend to push
    setGame({banned: true, canPush: true})
  }

  return (
    <div className="control-pannel">
      <div className="center-button">
        <button title="Word Pass" className="button" disabled={!game.canPush || game.banned} onClick={() => {handlePush()}}>PUSH</button>
      </div>
    </div>
  );
}

export default Player;
