import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk)),
);

export default store;
