
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import './host.css';

function Host(props) {
  const [step, setStep] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(1);
  const categories = ['C1', 'C2']
  
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

  const selectCategory = () => {

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
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Front End</MenuItem>
                <MenuItem value={2}>Database</MenuItem>
                <MenuItem value={3}>Java</MenuItem>
              </Select>
            </FormControl>
            <div className="center-button">
              <button title="Word Pass" className="button"  onClick={() => goToQuestion}>Go</button>
            </div>
          </div>
        ) :
        <div className="control-pannel">
          <div className="center-button">
            <Button variant="contained" onClick={() => handleStart}>Start</Button>
            <Button variant="contained" onClick={() => handleReset}>Reset</Button>
          </div>
          <div>
            Player answering
            <Button variant="contained" onClick={() => handleCorrectAnswer}>C</Button>
            <Button variant="contained" onClick={() => handleWrongAnswer}>W</Button>
          </div>
          <div>
            <Button variant="contained" onClick={() => handleSkip}>Skip</Button>
          </div>
        </div>
      }
    </>
  );
}

export default Host;
