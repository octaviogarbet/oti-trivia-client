import { useState, useEffect } from 'react';
import {
  useParams
} from "react-router-dom";
import './game.css';

function Game(props) {
  let { gameId } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    //TODO: get data from backend and websockets
    const savedData = JSON.parse(localStorage.getItem(gameId));
    const categories = savedData.categories.map(c => {
      const questions = [];
      for (let index = 0; index < savedData.totalQuestions; index++) {
        questions.push({points: (index * 25) + 25, answered: !index})
      }
      return {
        category: c,
        questions
      }
    })
    const dummyGame = {
      name: savedData.name,
      totalQuestions: savedData.totalQuestions,
      totalCategories: savedData.totalCategories,
      categories: categories,
      answering: 'Oti',
      nextQuestion: { category: savedData.categories[0], points: 50 },
      answerOrder: ['Oti', 'Andres', 'Horacio'],
      banned: ['Santi'],
      scoreBoard: [{name: 'Oti', points: 25}, {name: 'Andres', points: 25}, {name: 'Horacio', points: 25}, {name: 'Santi', points: 25}]
    }
    setGame(dummyGame)
    console.log(dummyGame)
  }, [gameId]);

  return (
    <main className="control-pannel">
      <h1>Oti's Trivia: {game?.name}</h1>
      <section>
        {
          game?.categories?.map((c, cindex) => (
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
