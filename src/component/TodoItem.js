// src/components/TodoItem.js
import React from "react";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import ToggleTodo from "./ToggleTodo";
import "./TodoItem.scss";
 
function TodoItem({ todo }) {
  return (
    <div className="todo-item">
    <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
    </span>
    <div className="todo-icons">
      <ToggleTodo todo={todo} />
      <EditTodo todo={todo} />
      <DeleteTodo id={todo.id} />
    </div>
  </div>
  );
}

export default TodoItem;
