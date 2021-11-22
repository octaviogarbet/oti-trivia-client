import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";
import './game.css';
import logo from '../../assets/images/otilogo.png';
import * as myConst from '../../constants';

function Game(props) {
  let { gameId } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    //TODO: get data from backend and 
    
    const ws = new WebSocket(myConst.WS + "websocket?gameId="+gameId);
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
    }
    ws.onmessage = (evt) => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data)
      //this.setState({dataFromServer: message})
      if (message.body)
        setGame(message.body)
    }

    ws.onclose = () => {
      // automatically try to reconnect on connection loss
    }
    axios.get(myConst.API + 'game/' + gameId).then(response => {
      setGame(response.data)
    })
  }, [gameId]);

  return (
    <main className="control-pannel">
      <div className="logo">
      <img alt="Oti´s Dev Week Trivia" src={logo}/>
      </div>
      <div className="main-box">
        <div className="main-container">

          <div className="principal-info">
            <section className="board">
              {
                game?.pointsTable?.map((c, cindex) => (
                  <div key={cindex} className="column">
                    <div className={"category cat-"+cindex}>{c.category}</div>
                    <div className="points-column">
                      {c.questions.map((q, qindex) => (
                        <div
                          key={qindex}
                          className={'points points-'+ q.points + ' ' + (q.answered ? 'answered' : 'pending') + ' ' + (c.category === game?.nextQuestion?.category && q.points === game?.nextQuestion?.points && 'focus')}
                        >{q.points}</div>
                      ))}
                    </div>
                  </div>
                ))
              }
            </section>
            <section className="score-table">
              <h2>Score </h2>
              <div className="row">
              {
                game?.scoreBoard?.map(player => (
                  <div className="score-box" key={player.name}>
                    <div className="box-player">{player.name}</div>
                    <div className="box-points">{player.points}</div>
                  </div>
                ))
              }
              </div>
            </section>
          </div>
          <section className={'answers ' + (game?.canAnswer && 'can')}>
            <article className="answers-box">
              <h3>Answer order</h3>
              { game?.answerOrder?.map((item, index) => (<div key={index} className={"answer-item " + (item === game.answering && 'answering')}>{item}</div>))}
            </article>
            <article className="answers-box">
              <h3>Banned</h3>
              { game?.banned?.map((item, index) => (<div key={index} className="answer-item">{item}</div>))}
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Game;
