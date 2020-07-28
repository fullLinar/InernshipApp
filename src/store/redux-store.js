import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import columnsReducer from '../reducers/columnsReducer';
import prayerReducer from '../reducers/prayerReducer';
import commentReducer from '../reducers/commentReducer';

const reducers = combineReducers({
  authData: authReducer,
  columnsData: columnsReducer,
  prayerData: prayerReducer,
  commentData: commentReducer,
});

let store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;
