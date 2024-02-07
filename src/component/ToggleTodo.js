// src/components/ToggleTodo.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../reducers/todoReducer';

function ToggleTodo({ todo }) {
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <input type="checkbox" checked={todo.completed} onChange={handleToggleTodo} />
  );
}

export default ToggleTodo;
