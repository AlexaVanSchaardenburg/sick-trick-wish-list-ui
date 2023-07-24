import './App.css';
import { React, useEffect, useState } from 'react';
import Card from '../Card/Card.js'
import Form from '../Form/Form.js'

const App = () => {

  const [tricks, setTricks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(res => res.json())
      .then(res => setTricks(res))
  }, [])

  const addTrick = (newTrick) => {
    setTricks([...tricks, newTrick])
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <div className='cards'>
        {tricks.map(trick => <Card trick={trick}/>)}
      </div>
    </div>
  );
}

export default App; 
