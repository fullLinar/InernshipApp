import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
import todoReducer from '../reducers/todoReducer';
import prayerReducer from '../reducers/prayerReducer';
import commentReducer from '../reducers/commentReducer';

const reducers = combineReducers({
  authData: authReducer,
  todoData: todoReducer,
  prayerData: prayerReducer,
  commentData: commentReducer,
});

let store = createStore(reducers);

export default store;
