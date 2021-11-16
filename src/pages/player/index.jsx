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
    const savedData = localStorage.getItem(gameId + 'player');
    console.log(savedData);
    const ws = new WebSocket("ws://localhost:3000/websocket?gameId="+gameId+"&player="+savedData);
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }
    ws.onmessage = (evt) => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data)
      //this.setState({dataFromServer: message})
      console.log(message)
    }

    ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
    }

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
