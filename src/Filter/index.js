import React, { useContext } from 'react'
import { useAppContext } from '../context';

const Filter = () => {
  const dispatch = useAppContext();

  const handleShowAll = () => {
    dispatch({ type: 'SHOW_ALL' });
  }

  const handleShowComplete = () => {
    dispatch({ type: 'SHOW_COMPLETE' })
  }

  const handleShowIncomplete = () => {
    dispatch({ type: 'SHOW_INCOMPLETE' });
  }

  return (
    <div>
      <button type='button' onClick={handleShowAll}>Show All</button>
      <button type='button' onClick={handleShowComplete}>Show Complete</button>
      <button type='button' onClick={handleShowIncomplete}>Show Incomplete</button>
    </div>
)
}

export default Filter;