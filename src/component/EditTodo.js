import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../reducers/todoReducer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaEdit } from 'react-icons/fa';


function EditTodo({ todo }) {
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEditTodo = () => {
    dispatch(editTodo({ id: todo.id, newText }));
  };

  return (
    <Popup trigger={<button> <FaEdit/> </button>} position="right center">
      <div>
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
        <button onClick={handleEditTodo}>Save</button>
      </div>
    </Popup>
  );
}

export default EditTodo;
