import React, { useState } from 'react'
import { useAppContext } from '../context'
import {v4 as uuidv4} from 'uuid';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const dispatch = useAppContext();

  const handleChangeInput = e => {
    setTask(e.target.value);
  }

  const handleSubmit = event => {
    if (task) {
      dispatch({ type: 'ADD_TODO', task, id: uuidv4() });
    }

    setTask('');
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={task} onChange={handleChangeInput} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo;