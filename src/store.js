import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: {
    todos: todoReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  },
  middleware: middleware,
});

export default store;
