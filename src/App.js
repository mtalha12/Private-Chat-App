import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { Store } from './store/store';
import Routers from './Router';

const App = () => {
  return (
    <Provider store={Store}>
      <Routers />
    </Provider>
  )
}
export default App
