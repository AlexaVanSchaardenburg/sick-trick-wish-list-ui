import './App.css';
import { React, useEffect, useState } from 'react';
import Card from '../Card/Card.js'
import Form from '../Form/Form.js'

const App = () => {

  const [allTricks, setAllTricks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(res => res.json())
      .then(res => setAllTricks(res))
  }, [])

  const addTrick = (newTrick) => {
    setAllTricks([...allTricks, newTrick])
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <div className='cards'>
        {allTricks.map(thisTrick => <Card thisTrick={thisTrick}/>)}
      </div>
    </div>
  );
}

export default App; 
