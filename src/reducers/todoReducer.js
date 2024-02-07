import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state.push(newTodo);
    },
    editTodo(state, action) {
      const { id, newText } = action.payload;
      const existingTodo = state.find(todo => todo.id === id);
      if (existingTodo) {
        existingTodo.text = newText;
      }
    },
    deleteTodo(state, action) {
      const idToDelete = action.payload;
      return state.filter(todo => todo.id !== idToDelete);
    },
    toggleTodo(state, action) {
      const idToToggle = action.payload;
      const todoToToggle = state.find(todo => todo.id === idToToggle);
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
    }
  }
});

export const { addTodo, editTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
