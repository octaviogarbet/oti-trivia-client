
import React, { useState, useEffect } from 'react'
import {
  useParams
} from "react-router-dom";
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import './host.css';
import * as myConst from '../../constants';

function Host(props) {
  let { gameId } = useParams();
  const [game, setGame] = useState({});
  const [step, setStep] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(1);


  useEffect(() => {
    //TODO: get data from backend and websockets
    axios.get(myConst.API + 'game/' + gameId).then(response => {
      setGame(response.data)
    })
  }, [gameId]);
  
  const handleStart = () => {
    axios.put(myConst.API + 'game/' + gameId + '/start', {}).then(response => {
    })
  }

  const handleReset = () => {
    axios.put(myConst.API + 'game/' + gameId + '/reset', {}).then(response => {
    })
  }

  const handleSkip = () => {
    axios.put(myConst.API + 'game/' + gameId + '/skip', {}).then(response => {
    })
    setStep(1);
  }

  const handleCorrectAnswer = () => {
    axios.put(myConst.API + 'game/' + gameId + '/correct', {}).then(response => {
    })
    setStep(1);
  }

  const handleWrongAnswer = () => {
    axios.put(myConst.API + 'game/' + gameId + '/wrong', {}).then(response => {
    })
  }

  const selectCategory = ($event) => {
    setCurrentCategory($event.target.value);
  }

  const goToQuestion = () => {
    axios.put(myConst.API + 'game/' + gameId + '/answer', {category: currentCategory}).then(response => {
      //setGame(response.data)
    })
    setStep(2);
  }

  return (
    <>
      {
        (step === 1) ? (
          <div className="host-pannel">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={currentCategory}
                onChange={selectCategory}
                label="Categoria"
              >
                {
                  game?.categories?.map(c => (
                    <MenuItem value={c} key={c} >{c}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <div className="center-button">
              <Button title="Word Pass" onClick={() => {goToQuestion()}}>Go</Button>
            </div>
          </div>
        ) :
        <div className="host-pannel">
          <div className="buttons-row">
            <Button variant="contained" onClick={() => {handleStart()}}>Start</Button>
            <Button variant="contained" onClick={() => {handleReset()}}>Reset</Button>
          </div>
          <div className="buttons-row">
            <Button variant="contained" onClick={() => {handleCorrectAnswer()}}>C</Button>
            <Button variant="contained" onClick={() => {handleWrongAnswer()}}>W</Button>
          </div>
          <div className="buttons-row">
            <Button variant="contained" onClick={() => {handleSkip()}}>Skip</Button>
          </div>
        </div>
      }
    </>
  );
}

export default Host;
