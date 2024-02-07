// src/components/TodoList.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import "./TodoList.scss";
import { useNavigate } from "react-router-dom";


function TodoList() {
  const todos = useSelector((state) => state.todos);
  const itemsPerPage = 4; // Number of todos per page
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate(); // Use useNavigate hook

  const indexOfLastTodo = currentPage * itemsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const totalPages = Math.ceil(todos.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/todos?page=${pageNumber}`); 
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      navigate(`/todos?page=${currentPage + 1}`);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate(`/todos?page=${currentPage - 1}`);
    }
  };

  return (
    <div className="todo-list-container">
      <h2>Todo List</h2>
      <AddTodo />
      <ul className="todo-list">
        {currentTodos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
      <div>
        <button disabled={currentPage === 1} onClick={handlePreviousPage}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default TodoList;
