// src/components/DeleteTodo.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../reducers/todoReducer';
import {FaTrashAlt } from 'react-icons/fa';


function DeleteTodo({ id }) {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <button onClick={handleDeleteTodo}><FaTrashAlt /></button>
  );
}

export default DeleteTodo;
