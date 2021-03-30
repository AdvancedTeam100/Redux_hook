import React from 'react'
import { useAppContext } from '../context'

const TodoList = ({todos}) => (
  <div>
    <ul>
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo}/>
        ))
      }
    </ul>
  </div>
)

const TodoItem = ({ todo }) => {
  const dispatch = useAppContext();

  const handleChange = () =>
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
 
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}
        />
        {todo.task}
      </label>
    </li>
  );
};


export default TodoList;