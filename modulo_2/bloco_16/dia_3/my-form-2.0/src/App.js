import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';

import Home from './components/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <Provider store={ store }>
          <Home />
        </Provider>
      </main>
    );
  }
}

export default App;
