import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import columnsReducer from '../reducers/columnsReducer';
import commentsReducer from '../reducers/commentsReducer';
import prayersReducer from '../reducers/prayersReducer';

const reducers = combineReducers({
  authData: authReducer,
  columnsData: columnsReducer,
  prayersData: prayersReducer,
  commentsData: commentsReducer,
});

let store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;
