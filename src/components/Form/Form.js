import './Form.css';
import { useState } from 'react';

const Form = ({ addTrick }) => {

  const [stance, setStance] = useState('')
  const [name, setName] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [tutorial, setTutorial] = useState('')

  const clearInputs = () => {
    setStance('')
    setName('')
    setObstacle('')
    setTutorial('')
  }

  const sendIt = (e) => {
    e.preventDefault()
    const newTrick = {
      id: Date.now(),
      stance,
      name,
      obstacle,
      tutorial
    }
    addTrick(newTrick)
    clearInputs()
  }

  return (
    <div className="Form">

      <select className='form-input' name="stance" value={stance}  onChange={event => setStance(event.target.value)}>
        <option value="" disabled selected>Choose your Stance</option>
        <option value="regular">Regular</option>
        <option value="switch">Switch</option>
      </select>

      <input className='form-input' type="text" name="trick-name" placeholder='Name of Trick' value={name}  onChange={event => setName(event.target.value)}></input>

      <select className='form-input' name="obstacle" value={obstacle}  onChange={event => setObstacle(event.target.value)}>
        <option value="" disabled selected>Choose your Obstacle</option>
        <option value="flatground">Flatground</option>
        <option value="ledge">Ledge</option>
        <option value="rail">Rail</option>
        <option value="stairs">Stairs</option>
        <option value="pool">Pool</option>
      </select>

      <input className='form-input' type="text" name="tutorial-link" placeholder='Link to Tutorial' value={tutorial}  onChange={event => setTutorial(event.target.value)}></input>

      <button className='form-input' onClick={e => sendIt(e)}>SEND IT!</button>
    </div>
  );
}

export default Form; 