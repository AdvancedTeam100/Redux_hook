import React, { useReducer, createContext, useEffect } from 'react';
import './App.css';

import { AppContext } from './context';
import Filter from './Filter'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import { filterReducer, todoReducer } from './reducer'
import {v4 as uuidv4} from 'uuid';
import useCombinedReducers from 'use-combined-reducers'

const initialTodos = [
  {
    id: uuidv4(),
    task: 'Learn React',
    complete: false
  },
  {
    id: uuidv4(),
    task: 'Learn Redux',
    complete: true
  },
  {
    id: uuidv4(),
    task: 'Learn React-Hook',
    complete: false
  },
  {
    id: uuidv4(),
    task: 'Learn Django',
    complete: true
  },
  {
    id: uuidv4(),
    task: 'Learn GraphQL',
    complete: false
  },
]


const App = () => {
  const [state, dispatch] = useCombinedReducers({
    filter: useReducer(filterReducer, 'ALL'),
    todos: useReducer(todoReducer, initialTodos)
  });


  const filterdTodos = (state.todos).filter(todo => {
    if (state.filter === 'ALL') {
      return true;
    }
    
    if (state.filter === 'COMPLETE' && todo.complete) {
      return true;
    }

    if (state.filter === 'INCOMPLETE' && !todo.complete) {
      return true;
    }
  })

  return (
    <AppContext.Provider value={dispatch}>
      <Filter />
      <TodoList todos={filterdTodos} />
      <AddTodo />
    </AppContext.Provider>
  )
}

export default App;
