
import React, { useState, useEffect } from 'react'
import {
  useParams
} from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import './host.css';

function Host(props) {
  let { gameId } = useParams();
  const [game, setGame] = useState({});
  const [step, setStep] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(1);


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
    }
    setGame(dummyGame)
    console.log(dummyGame)
  }, [gameId]);
  
  const handleStart = () => {

  }

  const handleReset = () => {

  }

  const handleSkip = () => {

    setStep(1);
  }

  const handleCorrectAnswer = () => {

    setStep(1);
  }

  const handleWrongAnswer = () => {

    setStep(1);
  }

  const selectCategory = ($event) => {
    setCurrentCategory($event.target.value);
  }

  const goToQuestion = () => {

    setStep(2);
  }

  return (
    <>
      {
        (step === 1) ? (
          <div className="control-pannel">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={currentCategory}
                onChange={selectCategory}
                label="Age"
              >
                {
                  game?.categories?.map(c => (
                    <MenuItem value={c.category} key={c.category} >{c.category}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <div className="center-button">
              <Button title="Word Pass" className="button"  onClick={() => {goToQuestion()}}>Go</Button>
            </div>
          </div>
        ) :
        <div className="control-pannel">
          <div className="center-button">
            <Button variant="contained" onClick={() => {handleStart()}}>Start</Button>
            <Button variant="contained" onClick={() => {handleReset()}}>Reset</Button>
          </div>
          <div>
            Player answering
            <Button variant="contained" onClick={() => {handleCorrectAnswer()}}>C</Button>
            <Button variant="contained" onClick={() => {handleWrongAnswer()}}>W</Button>
          </div>
          <div>
            <Button variant="contained" onClick={() => {handleSkip()}}>Skip</Button>
          </div>
        </div>
      }
    </>
  );
}

export default Host;
