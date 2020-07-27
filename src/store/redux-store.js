import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import todoReducer from '../reducers/todoReducer';
import prayerReducer from '../reducers/prayerReducer';
import commentReducer from '../reducers/commentReducer';
import deskReducer from '../reducers/deskReducer';

const reducers = combineReducers({
  authData: authReducer,
  deskData: deskReducer,
  todoData: todoReducer,
  prayerData: prayerReducer,
  commentData: commentReducer,
});

let store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;
