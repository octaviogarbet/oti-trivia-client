import React, { useEffect, useState } from 'react';
import {
  useParams
} from "react-router-dom";
import './player.css';
import * as myConst from '../../constants';

function Player(props) {
  let { gameId } = useParams();
  const [game, setGame] = useState({banned: false, canPush: true});
  const [wsState, setWsState] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(myConst.WS + "websocket?gameId="+gameId+"&player="+localStorage.getItem(gameId + 'player'));
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
    }
    ws.onmessage = (evt) => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data)
      let answering = false
      if (message && message.body) {
        let banned = false
        if (message.body.banned.length) {
          const inBanned = message.body.banned.find(b => b === localStorage.getItem(gameId + 'player'))
          if (inBanned)
            banned = true;
        }
        if (message.body.answerOrder.length) {
          const inAnswering = message.body.answerOrder.find(b => b === localStorage.getItem(gameId + 'player'))
          if (inAnswering)
            answering = true;
        }
        setGame({banned, canPush: !answering})
      }
    }

    ws.onclose = () => {
      console.log('disconnected')
    }
    setWsState(ws)

  }, [gameId]);
  
  const handlePush = () => {
    //TODO: call backend to push
    try {
      wsState.send(JSON.stringify({type: 'push'})) //send data to the server
    } catch (error) {
      console.log(error) // catch error
    }
  }

  return (
    <div className="player-pannel">
      <div className="center-button">
        <button title="PRESS" className="button" disabled={!game.canPush || game.banned} onClick={() => {handlePush()}}>PRESS</button>
      </div>
    </div>
  );
}

export default Player;
