// src/reducers/todoReducer.js
import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../services/firebase'; // Assuming you have Firebase initialized here

// Define asynchronous action creator using createAsyncThunk
export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async (todo, { dispatch, getState }) => {
    try {
      await db.collection('todos').add(todo);
      return todo;
    } catch (error) {
      console.error('Error adding todo:', error);
      throw error;
    }
  }
);

export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
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
