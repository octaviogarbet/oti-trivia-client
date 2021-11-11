import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './new-game.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

function NewGame(props) {
  const [gameConfig, setGameConfig] = useState({
    name: '',
    totalCategories: 1,
    totalQuestions: 1,
    categories: ['example']
  });
  let history = useHistory();
  
  const handleCreate = () => {
    //TODO: Call backend create game
    console.log(gameConfig);
    //localStorage.setItem('gameid', JSON.stringify(gameConfig));
    axios.post('http://localhost:3000/game', gameConfig).then(response => {
      console.log(response)
      history.push(`game/${response.data.id}`);
    })
  }

  const handleChangeTotalCategories = ($event) => {
    const categories = [];
    for (let index = 0; index < $event.target.value; index++) {
      categories.push('');
    }
    console.log(categories)
    setGameConfig({...gameConfig, totalCategories: $event.target.value, categories });
  }

  const handleChangeName = ($event) => {
    setGameConfig({...gameConfig, name: $event.target.value});
  }

  const handleChangeQuestion = ($event) => {
    setGameConfig({...gameConfig, totalQuestions: $event.target.value});
  }

  const handleChangeCategory = (index, $event) => {
    const { categories } = gameConfig;
    categories[index] = $event.target.value;
    setGameConfig({...gameConfig, categories });
  }

  const getCategories = () => {
    const categories = []
    for (let index = 0; index < gameConfig.totalCategories; index++) {
      categories.push(
        <TextField
          id={"category-" + (index + 1)}
          className="form-element"
          key={"category-" + (index + 1)}
          label={"Category " + (index + 1)}
          type="text"
          variant="standard"
          value={gameConfig.categories[index]}
          onChange={(e) => handleChangeCategory(index, e)}
        />
      );
    }
    return categories;
  }

  return (
    <div className="control-pannel">
      <TextField
        id="player-name"
        className="form-element"
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
          className="form-element"
          value={gameConfig.totalCategories}
          label="Categories"
          onChange={handleChangeTotalCategories}
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
          className="form-element"
          value={gameConfig.totalQuestions}
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
      <div>
        <p>Categories</p>
        {
          getCategories()
        }
      </div>

      <div className="center-button">
        <Button title="Word Pass" className="button"  onClick={() => {handleCreate()}}>Create</Button>
      </div>
    </div>
  );
}

export default NewGame;
