import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodoAsync } from '../reducers/todoReducer';
import { FaPlusCircle } from "react-icons/fa";
import './AddTodo.scss'; 
// import { addTodo } from '../services/crudFirebase';

function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = async () => {
    if (text.trim() !== '') {
      try {
        await dispatch(addTodoAsync({ text, completed: false }));
        setText('');
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };


  return (
    <div className="add-todo-container">
      <input
        type="text"
        className="add-todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button className="add-todo-button" onClick={handleAddTodo}>
        <FaPlusCircle />
      </button>
    </div>
  );
}

export default AddTodo;
