import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";
import './game.css';

function Game(props) {
  let { gameId } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    //TODO: get data from backend and websockets
    axios.get('http://localhost:3000/game/' + gameId).then(response => {
      console.log(response.data)
      setGame(response.data)
    })
  }, [gameId]);

  return (
    <main className="control-pannel">
      <h1>Oti's Trivia: {game?.name}</h1>
      <section>
        {
          game?.pointsTable?.map((c, cindex) => (
            <div key={cindex} className={'matrix'+cindex}>
              <div>{c.category}</div>
              {c.questions.map((q, qindex) => (
                <div key={qindex} className={q.answered ? 'answered' : 'pending'}>{q.points}</div>
              ))}
            </div>
          ))
        }
      </section>
      <section>
        <h2>Score board</h2>
        <table>
          <thead>
            <tr>
              {
                game?.scoreBoard?.map(player => (
                  <th key={player.name}>{player.name}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                game?.scoreBoard?.map(player => (
                  <td key={player.name}>{player.points}</td>
                ))
              }
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h3>Answer order</h3>
        { game?.answerOrder?.map((item, index) => (<span key={index}>{item}</span>))}
        <h3>Banned</h3>
        { game?.banned?.map((item, index) => (<span key={index}>{item}</span>))}
      </section>
      <section>
        {
          game?.nextQuestion && (
            <>{ game?.nextQuestion?.category } for {game?.nextQuestion?.points}</>
          )
        }
        {
          game?.answering && (
            <>Answering: {game.answering}</>
          )
        }
        
      </section>
    </main>
  );
}

export default Game;
