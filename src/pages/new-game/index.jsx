import React, { useState } from 'react'
import './new-game.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewGame(props) {
  const [questions, setQuestions] = useState(1);
  const [categories, setCategories] = useState(1);
  const [gameConfig, setGameConfig] = useState({
    name: ''
  });
  
  const handleCreate = () => {

  }

  const handleChangeCategorie = () => {

  }

  const handleChangeName = () => {
    // setGameConfig()
  }

  const handleChangeQuestion = () => {

  }

  return (
    <div className="control-pannel">
      <TextField
          id="player-name"
          label="Name"
          type="text"
          variant="standard"
          value={gameConfig.name}
          onChange={handleChangeName}
        />

      <FormControl>
        <InputLabel id="demo-simple-select-label"># Categories</InputLabel>
        <Select
          labelId="select-categories-label"
          id="select-categories"
          value={categories}
          label="Categories"
          onChange={handleChangeCategorie}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="demo-simple-select-label"># Questions</InputLabel>
        <Select
          labelId="select-questions-label"
          id="select-questions"
          value={questions}
          label="Questions"
          onChange={handleChangeQuestion}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
        </Select>
      </FormControl>

      <div className="center-button">
        <button title="Word Pass" className="button"  onClick={() => handleCreate}>Create</button>
      </div>
    </div>
  );
}

export default NewGame;
