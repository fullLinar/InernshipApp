import React from 'react';
import Navigation from './src/components/Navigation.js/index.js';
import { Provider } from 'react-redux';
import store from './src/store/redux-store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
